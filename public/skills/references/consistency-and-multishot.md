# Consistency, Multi-shot & Model Dialect Notes

## Consistency Techniques

1. **Description Lock**
   - Write a detailed character/style block once and reuse it verbatim across all shots.

2. **Reference Images**
   - Strongest method. Use as IP-Adapter / character reference / Ingredients / --cref / image prompt wherever the model supports it.

3. **Frame Chaining**
   - Use the last frame (or a carefully chosen frame) of one generation as the starting image for the next.

4. **Material & Structural Anchors**
   - Explicitly lock clothing, hair, accessories, and rigid proportions when motion is extreme.

5. **Limit Simultaneous Extremes**
   - High-speed subject motion + complex camera move + identity change is a high-failure combination. Stage the difficulty.

## Multi-shot Workflow

1. Break the sequence into a clear shot list (framing + action + camera + duration).
2. Generate or lock a hero reference for identity and style.
3. Generate shot-by-shot or use native multi-shot features when available (e.g. Kling multi-shot logic).
4. Maintain the same description lock and reference across the sequence.
5. Design transitions intentionally (hard cut, match cut, continuous camera).

## Model Dialect Awareness (2025–2026)

- **Kling**: Strong physics and action. Rewards explicit motion verbs, choreography, and biomechanical detail. Good for multi-shot consistency with references.
- **Runway**: Strong control features (Motion Brush, Act-One, camera controls). Good for directed multi-shot and performance transfer.
- **Luma**: Keyframe and camera path friendly. Prefers mid-action verbs and secondary motion description. Keep prompts focused.
- **Veo**: High prompt adherence and audio. Benefits from structured, detailed descriptions and reference ingredients.
- **Flux / Midjourney (stills)**: Flux generally stronger prompt adherence; Midjourney stronger aesthetic defaults. Both benefit from camera + lighting specificity for realism.

Always adapt language density and structure to the target model.

## Evaluation of Generated Results

Checklist for naturalness:
- Anatomy and proportions stable across frames
- No foot sliding or ground contact errors
- No limb morphing or volume collapse
- Consistent lighting and shadows
- Identity (face, clothing, style) does not drift
- Motion blur and secondary motion feel physically plausible
- Camera movement has clear motivation and stable horizon when intended

When artifacts appear, diagnose the cause (over-constrained prompt, missing physics anchors, too many simultaneous changes) and prescribe a minimal targeted fix.