# Limpiar Contexto del Workshop

## Problema

Claude Code guarda múltiples tipos de contexto en `~/.claude/projects/`:
- **Archivos `.jsonl`**: Historial completo de conversaciones anteriores (causa cache reads altos!)
- **Directorio `memory/`**: Memoria persistente del proyecto
- **Subdirectorios**: Carpetas específicas de conversaciones

Para demos limpios del workshop, necesitamos eliminar TODO:

1. **Zero-config:** Sin memoria, sin historial, sin skills globales (verdadero "zero config")
2. **Full-stack:** Sin historial de demos anteriores que contaminen el contexto

## Solución Automática

### Antes de Cada Presentación

Ejecuta este comando para limpiar el contexto:

```bash
./clean-zero-config-context.sh
```

Esto:
- ✅ Elimina TODOS los archivos `.jsonl` de **zero-config** (historial de conversaciones)
- ✅ Elimina memoria del proyecto (`memory/`)
- ✅ Elimina subdirectorios de conversaciones específicas
- ✅ Elimina cache
- ✅ **NO toca full-stack** (preserva cache para demostrar eficiencia)

**Resultado:** 
- Zero-config: Cache reads = 0 ✅
- Full-stack: Cache reads > 0 ✅ (demuestra eficiencia del sistema)

### Después Ejecutar Setup

```bash
./setup-workshop-simple.sh
```

El setup ahora automáticamente:
- ✅ Crea `.claude/settings.local.json` en zero-config
- ✅ Desactiva skills globales para zero-config
- ✅ Desactiva memoria para zero-config

## Configuración Zero-Config

El archivo `.claude/settings.local.json` en zero-config contiene:

```json
{
  "skills": {
    "disableGlobal": true
  },
  "memory": {
    "enabled": false
  }
}
```

Esto asegura:
- ❌ No se cargan skills globales del usuario
- ❌ No se guarda ni se carga memoria del proyecto
- ✅ Verdadero "zero configuration"

## Configuración Full-Stack

El full-stack tiene configuración completa:
- ✅ CLAUDE.md con todas las reglas
- ✅ `.claude/rules/` con reglas modulares
- ✅ `.claude/skills/` con 5 skills
- ✅ Memoria habilitada (puede recordar contexto)

## Limpieza Manual

Si necesitas limpiar manualmente:

```bash
# Limpiar zero-config (recomendado antes de demos)
rm -rf ~/.claude/projects/-Users-juanmartinstaricco-Desktop-ai-workshop-workshop-demo-zero-config/*

# Limpiar full-stack (solo si necesitas empezar 100% fresh)
rm -rf ~/.claude/projects/-Users-juanmartinstaricco-Desktop-ai-workshop-workshop-demo-full-stack/*
```

**Nota:** Generalmente NO necesitas limpiar full-stack. El cache es beneficioso.

## Verificar Que Funciona

### Zero-Config

```bash
cd ~/Desktop/workshop-demo-zero-config
ls -la .claude/
# Debe mostrar: settings.local.json solamente

cat .claude/settings.local.json
# Debe mostrar: skills desactivados, memory desactivado
```

### Full-Stack

```bash
cd ~/Desktop/workshop-demo-full-stack
ls -la .claude/
# Debe mostrar: rules/, skills/, settings.local.json

ls .claude/rules/
# Debe mostrar: 4 archivos .md
```

## Workflow Recomendado

1. **Antes de la presentación:**
   ```bash
   ./clean-zero-config-context.sh
   ./setup-workshop-simple.sh
   ```

2. **Durante la presentación:**
   - Zero-config: Sin contexto previo, sin skills globales
   - Full-stack: Con configuración completa

3. **Después de la presentación:**
   - Opcional: Ejecuta `clean-zero-config-context.sh` para limpiar para la próxima

## Troubleshooting

**Problema:** Zero-config sigue mostrando skills globales

**Solución:** 
1. Verifica que `.claude/settings.local.json` existe en zero-config
2. Verifica que contiene `"disableGlobal": true`
3. Reinicia Claude Code
4. Ejecuta `./clean-zero-config-context.sh` de nuevo

**Problema:** Full-stack no encuentra las reglas

**Solución:**
1. Verifica que `.claude/rules/*.md` existen en full-stack
2. Ejecuta `./setup-workshop-simple.sh` de nuevo
