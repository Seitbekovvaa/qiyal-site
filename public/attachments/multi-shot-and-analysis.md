# Multi-shot Consistency & Detailed Video Analysis

## Multi-shot Workflow

1. Define a clear shot list with framing, action, camera, and duration.
2. Lock character identity (detailed description block + strong reference images).
3. Generate or select a hero reference frame for the character.
4. Generate shot-by-shot or use native multi-shot features, repeating the identity lock.
5. Prefer hard cuts and motivated angle changes between shots.
6. Use last-frame → next-shot chaining when the model supports image-to-video continuity.
7. Keep lighting, color grade, and overall style consistent across the sequence.

## Character Consistency Techniques

- Verbatim identity description repeated in every prompt
- Reference images / IP-Adapter / character reference / Ingredients features
- Material and proportion anchors (clothing details, face structure, body ratios)
- Limit extreme simultaneous changes (fast motion + big camera move + identity risk)

## Detailed Analysis Checklist for Generated Video

Every generated video must be carefully evaluated against these criteria:

### 1. Identity & Continuity
- Character face, proportions, clothing, hair remain consistent frame-to-frame and shot-to-shot
- No sudden changes in appearance, age, ethnicity, or distinctive features
- Same character looks like the same person across the entire sequence

### 2. Color, Lighting & Contrast
- Color grade is stable (no unexpected shifts in temperature, saturation, or tint)
- Lighting direction, intensity and quality stay consistent unless intentionally changed
- Contrast and exposure do not jump between frames or shots
- Shadows and highlights behave coherently

### 3. Physics & Motion
- Correct weight, mass and inertia
- Solid ground contact (no foot sliding)
- Natural acceleration / deceleration
- Secondary motion of hair, cloth, soft body
- No floating, sliding, or rubber-body behavior
- Limb and joint movement looks anatomical

### 4. Temporal & Visual Artifacts
- No flickering, shimmering or temporal instability
- Natural motion blur consistent with speed
- No morphing of limbs, face or objects
- No sudden pops or disappearances

### 5. Camera & Framing
- Movement feels motivated and physical
- Horizon and framing stable when intended
- No unwanted camera shake or drift

### 6. Performance & Gaze (Critical for Grok / many models)
- Character does **NOT** look directly into the camera unless the prompt explicitly requires it
- Character does **NOT** smile or show “pleasant default expression” when the scene is neutral, serious, tense or action-oriented
- Gaze is directed according to the action and eyeline of the scene (at another character, at an object, into the distance, etc.)
- Facial expression matches the emotional intention of the shot

**Common unwanted behavior to reject and correct:**
> Character turns to camera and smiles even though the prompt never asked for it.

This is a frequent default bias in several models (including Grok video). It must be actively prevented and, if it appears, treated as a failure.

## How to Prevent “Looking at Camera + Forced Smile”

In every prompt (especially for Grok):
- Explicitly state the gaze direction:  
  “looking at the other character”, “eyes fixed on the horizon”, “looking down at the object in his hands”, “gazing off-screen left”
- Explicitly state the expression:  
  “serious neutral expression”, “focused and tense”, “calm and reserved”, “no smile”, “mouth closed, relaxed face”
- Negative constraints when needed:  
  “not looking at camera, not smiling, not breaking the fourth wall”

If the generated result still shows the unwanted behavior — reject it, strengthen the gaze + expression instructions, and regenerate.

## Research & Correction Protocol

When any check fails:
1. Diagnose the most likely cause.
2. Issue a minimal, targeted correction to the prompt.
3. If the correct look is unclear — analyze real film references first, then rewrite.

Always prioritize physical truth, visual consistency and intentional performance over decorative or default model behavior.
