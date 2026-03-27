# 🎬 Workshop Presentation Setup Guide

## Quick Setup (5 minutos antes de presentar)

### Paso 1: Ejecuta el Script de Setup

```bash
cd /Users/juanmartinstaricco/Desktop/workshop-demo
./setup-workshop.sh
```

Esto creará 4 directorios:
- `workshop-demo-v1/` - Sin configuración
- `workshop-demo-v2/` - Con `.cursorrules`
- `workshop-demo-v3/` - Con `.cursorrules` + `.cursor/`
- `workshop-demo-v4/` - Con `CLAUDE.md` + `.claude/`

### Paso 2: Abre 4 Terminales

**Terminal/iTerm:**
- Cmd+T para nueva tab
- Repite 3 veces más (4 tabs total)

**En cada tab:**
```bash
# Tab 1
cd /Users/juanmartinstaricco/Desktop/workshop-demo-v1

# Tab 2
cd /Users/juanmartinstaricco/Desktop/workshop-demo-v2

# Tab 3
cd /Users/juanmartinstaricco/Desktop/workshop-demo-v3

# Tab 4
cd /Users/juanmartinstaricco/Desktop/workshop-demo-v4
```

### Paso 3: Verifica que Todo Funcione

En cualquier tab:
```bash
npm run dev
```

Debería abrir en http://localhost:3003

Ctrl+C para detener

---

## Durante la Presentación

### Estructura de Cada Demo

**Para V1, V2, V3, V4:**

1. **Explica la versión** (30 seg)
   ```bash
   # Muestra qué configuración tiene
   ls -la | grep -E '(cursor|claude|CLAUDE)'
   ```

2. **Muestra el prompt** (30 seg)
   - Abre tu editor
   - Muestra el prompt que vas a usar
   - Cópialo

3. **Ejecuta la demo** (2-5 min)
   - Abre Cursor/Claude Code en ese directorio
   - Pega el prompt
   - ⏱️ Cronómetra
   - Narra mientras genera

4. **Analiza el resultado** (2-3 min)
   ```bash
   # Muestra archivos generados
   git status

   # Muestra el código
   cat src/components/DeploymentHistory.tsx
   cat src/types/dashboard.ts

   # Muestra el diff
   git diff src/
   ```

5. **Señala puntos clave** (1-2 min)
   - V1: Problemas (default exports, inline styles, etc.)
   - V2: Mejoras (named exports, Tailwind, tipos)
   - V3: Workflow (paso a paso, /review)
   - V4: Autonomía (todo automático)

6. **Reset para siguiente demo** (10 seg)
   ```bash
   # Opción A: Manual
   git checkout . && git clean -fd

   # Opción B: Script
   ../workshop-demo/reset-demo.sh
   ```

---

## El Prompt (Cópialo)

```
Add a new "Deployment History" section to the dashboard that shows:
- A timeline of the last 10 deployments
- Each deployment shows: environment (prod/staging), status (success/failed/rolled-back), deployer name, timestamp, and commit hash
- Failed deployments should be visually distinct
- Add a "Deploy Frequency" stat card to the existing metrics row
- Use the same component patterns and styling as the existing codebase
```

---

## Comandos Útiles Durante la Demo

### Ver configuración actual
```bash
# Ver rules
cat .cursorrules 2>/dev/null || echo "No rules"

# Ver commands
ls .cursor/commands/ 2>/dev/null || echo "No commands"

# Ver skills
ls .claude/skills/ 2>/dev/null || echo "No skills"

# Ver CLAUDE.md
head -20 CLAUDE.md 2>/dev/null || echo "No CLAUDE.md"
```

### Analizar código generado
```bash
# Listar archivos modificados
git status --short

# Ver tipos
bat src/types/dashboard.ts  # o cat

# Ver componente
bat src/components/DeploymentHistory.tsx

# Ver todo el diff
git diff src/

# Contar líneas de código agregado
git diff --stat
```

### Reset rápido
```bash
# Método 1: Git directo
git checkout . && git clean -fd

# Método 2: Script
../workshop-demo/reset-demo.sh

# Verificar limpio
git status
```

---

## Timeline Sugerido (50 minutos)

| Tiempo | Actividad | Duración |
|--------|-----------|----------|
| 0:00 | Intro + Setup | 5 min |
| 0:05 | V1 Demo | 7 min |
| 0:12 | V2 Demo | 7 min |
| 0:19 | V3 Demo | 10 min |
| 0:29 | V4 Demo ⭐ | 15 min |
| 0:44 | Comparación Final | 5 min |
| 0:49 | Q&A | 10 min |

---

## Troubleshooting En Vivo

### Si algo sale mal en una demo:

**"Esto no siguió las convenciones"** (especialmente V1)
- ✅ ¡Perfecto! Eso prueba el punto
- "Ven, sin configuración es impredecible"

**La AI no responde / se traba**
- Ten screenshots/grabación de backup
- "Voy a mostrarles una grabación de cuando funcionó..."

**Git tiene conflictos**
- `git reset --hard HEAD`
- Si persiste: `cd ../workshop-demo-vX-backup && git clean -fd`

**Puerto 3003 ocupado**
- `lsof -ti:3003 | xargs kill -9`

**npm install falla**
- Ya debería estar instalado del setup
- Si no: `rm -rf node_modules package-lock.json && npm install`

---

## Checklist Pre-Presentación

- [ ] Ejecutado `./setup-workshop.sh` exitosamente
- [ ] 4 directorios creados (v1, v2, v3, v4)
- [ ] 4 terminales abiertas en cada directorio
- [ ] Verificado que `npm run dev` funciona
- [ ] Prompt copiado y accesible
- [ ] Cursor/Claude Code funcionando
- [ ] Internet estable
- [ ] Cronómetro listo
- [ ] Backup plan (screenshots/video) listo
- [ ] Presentación/slides listos

---

## Backup Plan

Si todo falla en vivo, tienes estas opciones:

1. **Mostrar grabación pre-grabada** de la demo
2. **Mostrar diffs ya generados** (genera antes y guarda)
3. **Live coding manual** mostrando los archivos que AI generaría

Genera un set de "resultados perfectos" antes:
```bash
# Antes de la presentación, en cada versión:
# Ejecuta la demo completamente
# Guarda el diff
git diff > ../perfect-demo-v1.diff
git diff > ../perfect-demo-v2.diff
git diff > ../perfect-demo-v3.diff
git diff > ../perfect-demo-v4.diff

# Si algo falla en vivo, puedes mostrar estos diffs
```

---

## Post-Presentación

Comparte el repo:
```bash
# Crear repo en GitHub
# Subir el código
git remote add origin https://github.com/tu-usuario/workshop-demo.git
git push -u origin main
```

Incluye en README el link para que la audiencia lo clone.

---

## Tips Finales

1. **Practica V4 al menos 3 veces** - es el momento cumbre
2. **Ten agua a mano** - hablarás mucho
3. **Llega 15 min antes** - para setup y verificación final
4. **Respira** - si algo falla, es contenido para tu próxima charla 😄
5. **Disfruta** - esta demo es impresionante

¡Éxito! 🚀
