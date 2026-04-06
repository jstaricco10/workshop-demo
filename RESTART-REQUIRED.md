# ⚠️ IMPORTANTE: Reiniciar Claude Code

## Problema

Después de ejecutar `./setup-workshop-simple.sh`, el archivo `.claude/settings.local.json` se crea en zero-config, pero **Claude Code no lo detecta automáticamente** si ya tienes el proyecto abierto.

## Solución

Después de ejecutar setup, DEBES:

### **Opción 1: Reinicio Completo (Recomendado)**

```bash
# 1. Cierra Claude Code completamente
# 2. Ejecuta setup
./setup-workshop-simple.sh

# 3. Abre Claude Code de nuevo
# 4. Abre ambos proyectos
```

### **Opción 2: Recargar Proyectos**

Si Claude Code ya está abierto:

```bash
# 1. Cierra todas las ventanas de workshop-demo
# 2. Ejecuta setup
./setup-workshop-simple.sh

# 3. Reabre los proyectos en Claude Code:
#    - workshop-demo-zero-config
#    - workshop-demo-full-stack
```

## Verificar Que Funciona

### Zero-Config

En `/context` deberías ver:

```
Skills · /skills
User
  (vacío - ninguna skill)  ← ✅ CORRECTO
```

**NO deberías ver:**
- vercel-react-best-practices
- web-design-guidelines
- react-doctor

### Full-Stack

En `/context` deberías ver:

```
Memory files · /memory
  CLAUDE.md: 1.4k tokens
  .claude/rules/components.md: 169 tokens
  .claude/rules/data-flow.md: 254 tokens
  .claude/rules/styling.md: 352 tokens
  .claude/rules/typescript.md: 200 tokens

Skills · /skills
User
  vercel-react-best-practices: 89 tokens
  web-design-guidelines: 52 tokens
  react-doctor: 37 tokens
```

## Si Sigues Viendo Skills en Zero-Config

1. **Verifica el archivo existe:**
   ```bash
   cat ~/Desktop/workshop-demo-zero-config/.claude/settings.local.json
   ```
   
   Debe mostrar:
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

2. **Cierra Claude Code completamente**
   - No solo la ventana, sal de la aplicación

3. **Reabre y carga zero-config**

4. **Verifica `/context` de nuevo**

## Workflow Correcto para Presentaciones

```bash
# SIEMPRE antes de abrir Claude Code:

# 1. Limpiar contexto
./clean-zero-config-context.sh

# 2. Setup
./setup-workshop-simple.sh

# 3. Cerrar Claude Code si está abierto

# 4. Abrir Claude Code

# 5. Abrir proyectos:
#    - workshop-demo-zero-config
#    - workshop-demo-full-stack

# 6. Verificar con /context en cada uno
```

## Por Qué Es Importante

Si zero-config tiene tus skills globales activas:
- ❌ El costo en tokens es similar a full-stack
- ❌ La diferencia en calidad de código es menor
- ❌ El demo pierde impacto

Con settings correcto:
- ✅ Zero-config: ~150-200 input tokens (solo prompt)
- ✅ Full-stack: ~1.5-2k input tokens (prompt + CLAUDE.md + rules)
- ✅ Diferencia clara y dramática
