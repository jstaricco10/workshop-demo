# Verificar Limpieza de Contexto

## Problema Original

Viste que zero-config estaba leyendo **311.9k y 391.4k de cache** cuando debería estar limpio.

**Causa:** Archivos `.jsonl` de conversaciones anteriores que Claude carga como contexto.

## Solución Implementada

El script `clean-zero-config-context.sh` ahora elimina:

1. ✅ Todos los archivos `.jsonl` (historial de conversaciones)
2. ✅ Directorio `memory/` (memoria persistente)  
3. ✅ Subdirectorios de conversaciones específicas
4. ✅ Cache

## Cómo Verificar

### Antes de la Presentación

```bash
# 1. Limpiar todo
./clean-zero-config-context.sh

# 2. Verificar que está limpio
du -sh ~/.claude/projects/*zero-config*
# Debe mostrar: 4.0K (casi vacío)

ls ~/.claude/projects/*zero-config*/
# Debe mostrar: vacío o solo archivos temporales

# 3. Crear ambientes frescos
./setup-workshop-simple.sh
```

### Durante el Demo

**Primera conversación en zero-config:**
- Cache read: debería ser **0** o muy bajo (<10k)
- Cache write: lo normal del output generado

**Si ves cache reads altos (>100k):**
- Significa que no se limpió correctamente
- Ejecuta `./clean-zero-config-context.sh` de nuevo
- Cierra y reabre Claude Code

## Ejemplo: Antes vs Después

### ANTES (sin limpiar .jsonl)
```
Usage by model:
  claude-sonnet-4-5: 157 input, 9.4k output, 
                     311.9k cache read ← ❌ MALO!
```

**Causa:** 11 archivos .jsonl (~1.5MB) de conversaciones anteriores

### DESPUÉS (con limpieza completa)
```
Usage by model:
  claude-sonnet-4-5: 157 input, 9.4k output, 
                     0 cache read ← ✅ PERFECTO!
```

**Motivo:** Directorio limpio, solo 4.0K

## Qué Elimina el Script

```bash
# Zero-config context path
~/.claude/projects/-Users-...-workshop-demo-zero-config/
  ├── *.jsonl          ← ELIMINADO (conversaciones anteriores)
  ├── memory/          ← ELIMINADO (memoria persistente)
  ├── */               ← ELIMINADO (carpetas de conversaciones)
  └── .cache/          ← ELIMINADO (cache)
```

## Troubleshooting

### Si sigues viendo cache reads altos:

1. **Verifica que el script corrió:**
   ```bash
   ./clean-zero-config-context.sh
   # Debe mostrar: "Removing X conversation history files..."
   ```

2. **Verifica el tamaño del directorio:**
   ```bash
   du -sh ~/.claude/projects/*zero-config*
   # Debe ser < 10K
   ```

3. **Cierra Claude Code completamente:**
   - Sal de la aplicación
   - Reabre en el proyecto zero-config

4. **Último recurso - elimina todo el directorio:**
   ```bash
   rm -rf ~/.claude/projects/*zero-config*
   ./setup-workshop-simple.sh
   ```

## Expected Results

**Zero-config (primera conversación después de limpiar):**
- Input: ~150-200 tokens (tu prompt)
- Output: ~8-10k tokens (código generado)
- Cache read: **0** ✅ (debe estar limpio)
- Cache write: ~8-10k (igual al output)

**Full-stack:**
- Input: ~1.2-1.5k tokens (prompt + CLAUDE.md + rules activadas)
- Output: ~8-10k tokens (código generado)
- Cache read: **Puede ser > 0** ✅ (está bien! muestra que el sistema funciona)
- Cache write: ~8-10k

**Nota:** Para full-stack, tener cache reads NO es malo - demuestra que:
- El sistema mantiene contexto entre conversaciones
- CLAUDE.md y rules se cachean eficientemente
- La configuración persiste y funciona bien

Solo zero-config necesita cache reads = 0 para demostrar "verdadero zero config".

## Resumen

Para un demo limpio, SIEMPRE ejecuta antes:

```bash
./clean-zero-config-context.sh
./setup-workshop-simple.sh
```

Esto garantiza cache reads = 0 en ambos proyectos.
