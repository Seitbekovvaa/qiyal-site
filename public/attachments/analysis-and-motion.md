# Visual Analysis & Motion Physics for Prompting

## Image Analysis Checklist

When analyzing a reference or target image, systematically extract:

- **Composition & Lines**: leading lines, framing, negative space, balance, rule of thirds / center / dynamic asymmetry
- **Color**: palette, grading (warm/cool, teal-orange, desaturated, high contrast), saturation levels, color temperature
- **Lighting**: key direction and quality (hard/soft), fill ratio, rim/back light, practicals, volumetric effects
- **Pose & Anatomy**: weight distribution, balance, joint angles, micro-tension, expression
- **Lens & Camera**: estimated focal length, depth of field, distortion, bokeh quality, perspective
- **Texture & Materials**: skin, fabric, metal, surface response to light (Fresnel, subsurface scattering)
- **Overall Aesthetic**: photoreal / cinematic / stylized / specific artist or studio language

## Video / Motion Analysis Checklist

- Subject motion vs camera motion (must be separated in prompts)
- Trajectory, speed, acceleration / deceleration, inertia
- Secondary motion (hair, cloth, soft body, particles)
- Contact points and weight transfer
- Temporal consistency (identity, lighting, geometry across frames)
- Motion blur characteristics (direction, intensity, shutter angle feel)
- Physics compliance (gravity, volume preservation, no morphing)

## Motion Physics Prompting Language

Use precise biomechanical and physical descriptors:

- Weight shift, plant and push, hip rotation, follow-through
- Acceleration, deceleration, impact absorption
- Inertia of limbs, secondary lag of clothing/hair
- "Controlled high-speed", "sharp but natural", "viscous rebound"
- Explicitly state "steady camera" or specific camera verb when isolating subject motion

For fast motion while preserving consistency:
- Anchor rigid body parts and identity descriptors
- Limit simultaneous extreme camera + subject motion in one generation
- Describe secondary motion explicitly so the model does not invent chaos
- Prefer image-to-video with strong reference when identity is critical

## Camera & Lens Language (High Signal)

Always pair focal length with framing and aperture when possible:

- 24–35mm: environmental, wider perspective, more distortion risk
- 50mm: natural human perspective
- 85–135mm: portrait compression, shallow DoF, subject isolation
- Anamorphic: horizontal flares, oval bokeh, cinematic squeeze feel
- Handheld: subtle breathing, micro-shake, operator effort
- Dolly / tracking / crane: describe the physical motivation of the move

## Photography Realism Distinctions

**Studio**:
- Controlled multi-light setups
- Softboxes / beauty dishes / flags
- High micro-detail, clean or deliberately styled background
- Precise focus plane

**Phone / Candid**:
- Wider FOV, computational processing
- Natural or mixed ambient light
- Slight optical + computational artifacts
- More casual composition and depth map imperfections

Specify the intent clearly in the prompt when realism is required.