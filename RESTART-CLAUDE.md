# Cómo Reiniciar Claude Code

## Opción 1: Desktop App (Recomendado)

Si usas Claude Code como aplicación de escritorio:

### macOS
```bash
# Método 1: Usando el menú
Cmd + Q  # Salir completamente

# Método 2: Desde terminal
pkill -9 "Claude Code"
# o
killall "Claude Code"

# Luego reabre la aplicación
open -a "Claude Code"
```

### Windows
```bash
# Cerrar desde el system tray
Right-click en el ícono → Quit

# O desde Task Manager
Ctrl + Shift + Esc → Find "Claude Code" → End Task
```

## Opción 2: CLI

Si estás usando `claude` desde terminal:

```bash
# 1. Salir del proyecto actual
# Usa Ctrl+C para interrumpir si está ejecutando algo

# 2. Salir de claude
exit
# o Ctrl+D

# 3. Reiniciar
claude
```

## Opción 3: VS Code Extension

Si usas Claude Code en VS Code:

```bash
# 1. Cerrar VS Code completamente
Cmd + Q (Mac) o Alt + F4 (Windows)

# 2. Reabre VS Code
code .
```

## Opción 4: Browser (claude.ai/code)

Si usas la versión web:

```bash
# 1. Cierra la pestaña del browser
# 2. Cierra el browser completamente
# 3. Reabre y ve a claude.ai/code
```

---

## Verificar que Reinició Correctamente

Después de reiniciar, verifica que cargó los nuevos settings:

### En Zero-Config:

```bash
cd ~/Desktop/ai-workshop/workshop-demo-zero-config
claude  # o abre en la app
```

Luego ejecuta:
```
/context
```

**Debe mostrar:**
- Skills: Solo system skills (~527 tokens)
- User: (vacío) ← ✅ SIN vercel-react-best-practices, web-design-guidelines, react-doctor

### En Full-Stack:

```bash
cd ~/Desktop/ai-workshop/workshop-demo-full-stack
claude  # o abre en la app
```

Luego ejecuta:
```
/context
```

**Debe mostrar:**
- Memory files: CLAUDE.md, rules/
- Skills: User skills (vercel-react, web-design, react-doctor)

---

## Si Siguen Apareciendo Skills en Zero-Config

1. **Verifica que el archivo existe:**
   ```bash
   cat ~/Desktop/ai-workshop/workshop-demo-zero-config/.claude/settings.local.json
   ```

2. **Borra el contexto de Claude:**
   ```bash
   ./clean-zero-config-context.sh
   ```

3. **Reinicia de nuevo (cierra TODO):**
   - Cierra todas las ventanas/proyectos
   - Sal de la aplicación completamente
   - Espera 2-3 segundos
   - Abre de nuevo

4. **Verifica de nuevo con `/context`**

---

## Método Nuclear (Si Nada Funciona)

Si después de reiniciar siguen apareciendo las skills en zero-config:

```bash
# 1. Cierra Claude Code completamente
# 2. Borra TODO el contexto
rm -rf ~/.claude/projects/*zero-config*
rm -rf ~/.claude/projects/*full-stack*

# 3. Ejecuta setup de nuevo
./setup-workshop-simple.sh

# 4. Abre Claude Code
# 5. Abre los proyectos

# Ahora DEBE funcionar
```

---

## Troubleshooting

**Problema:** Skills siguen apareciendo después de reiniciar

**Causa más común:** El proyecto está abierto en múltiples lugares
- Verifica que no tienes múltiples ventanas de Claude Code abiertas
- Verifica que no está corriendo en browser Y desktop app simultáneamente

**Solución:**
1. Cierra TODAS las instancias de Claude Code
2. Verifica que el proceso no esté corriendo:
   ```bash
   ps aux | grep -i claude
   ```
3. Mata cualquier proceso que encuentres:
   ```bash
   pkill -9 -i claude
   ```
4. Abre UNA SOLA instancia

---

## Quick Reference

```bash
# Workflow completo para demos limpios:

# 1. Limpiar
./clean-zero-config-context.sh

# 2. Setup
./setup-workshop-simple.sh

# 3. Cerrar Claude Code COMPLETAMENTE
# macOS: Cmd+Q
# Windows: Quit from tray
# CLI: exit

# 4. Esperar 2-3 segundos

# 5. Abrir Claude Code

# 6. Verificar con /context en ambos proyectos

# 7. ¡Listo para el demo! 🚀
```
