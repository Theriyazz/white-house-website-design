# White House demo: image specs for GPT Image 2.5 (version 5)

55 images. Same file names as before, so the site needs no code change. Save each result with the exact name into `white-house-web/public/images/`.

## What this version fixes

- **Men are always the subject.** Small cards, categories, products and tiles are a solo man or men, studio-shot. Women appear only in the big location images where they belong: the family at Diwali, the jaan dancing, the bride beside the groom, a mother with her son.
- **No feminine poses on men.** No henna on a man's hand, no twirling, no hand in the hair. Every prompt carries a posture rule.
- **Two kinds of picture, like the reference sites.** *Studio*: front-facing model on a plain coloured backdrop, for products, occasions, categories, party and menu tiles. *Location*: wide, lived-in scenes for the hero banners, the mirror, the shop and the stories.
- **A different man in every image**, described by age, build, skin, hair and beard. Ordinary good-looking men, not one film-star face.
- **Mostly front-facing.** Eye contact in the catalogue shots; a few three-quarter turns for rhythm. No back views of models.
- **Matched to the current page copy**: father tying the safa, friends in the jaan, three generations at Diwali, the mirror, the chai.

## How to generate

1. **New chat for every image.** Do not continue an old conversation and do not attach earlier images. That is what made the same face repeat.
2. Paste the prompt unchanged and add the ratio as a last line, for example `Aspect ratio 3:4`.
3. Ask for the highest resolution your plan allows. API sizes are listed per image.
4. If something is off, fix it with one plain reply in the same chat: `Same image, but a clearly different man: change face shape, nose, hairline and beard.` or `Same image, hands clean with no henna.`

| Ratio | API size | Used for |
|---|---|---|
| 16:9 | `3840x2160` | Hero banners, store background |
| 4:5 | `1632x2048` | Groom feature, craft close-ups, mobile heroes |
| 3:4 | `1536x2048` | Occasions, products, party, stories, heritage |
| 1:1 | `2048x2048` | Category circles |
| 4:3 | `2048x1536` | Mega menu tiles |

The 4K banner size sits above the range the model handles most reliably. If a banner comes out soft or distorted, regenerate at `2048x1152`.

## Shot list

| Section | Image | Type and pose |
|---|---|---|
| Hero banners | `hero-groom` | Location. Groom front-facing, father beside him, mother in the doorway |
| Hero banners | `hero-guest` | Location. Friends dancing at the front of the jaan, family behind |
| Hero banners | `hero-festive` | Location. Whole family, front-facing |
| Shop by occasion | `occasion-pithi` | Studio, front, laughing |
| Shop by occasion | `occasion-mehendi` | Studio, three-quarter left, hands in pockets |
| Shop by occasion | `occasion-sangeet` | Studio, front, dandiya on the shoulder |
| Shop by occasion | `occasion-lagna` | Studio, front, composed |
| Shop by occasion | `occasion-reception` | Studio, front, fastening a button |
| The Groom's Edit | `groom-feature` | Location. Face seen front-on in the mirror |
| The Groom's Edit | `groom-sherwani` | Studio, front |
| The Groom's Edit | `groom-jodhpuri` | Studio, front, arms crossed |
| The Groom's Edit | `groom-indowestern` | Studio, three-quarter right, adjusting cuff |
| Wedding party | `party-groom` | Studio, front, full length |
| Wedding party | `party-father` | Studio, three-quarter left |
| Wedding party | `party-brothers` | Studio, front, arm over shoulder |
| Wedding party | `party-kids` | Studio, front, child's eye level |
| Featured collection | `product-01` | Studio, front |
| Featured collection | `product-02` | Studio, three-quarter left |
| Featured collection | `product-03` | Studio, walking toward camera |
| Featured collection | `product-04` | Studio, front, seated |
| Featured collection | `product-05` | Studio, three-quarter right |
| Featured collection | `product-06` | Studio, front, dandiya in hand |
| Featured collection | `product-07` | Studio, front, slightly low angle |
| Featured collection | `product-08` | Studio, front |
| Shop by category | `category-groom` | Studio, front, close |
| Shop by category | `category-suits` | Studio, front, close |
| Shop by category | `category-kurta` | Studio, three-quarter right |
| Shop by category | `category-family` | Studio, front, both to camera |
| Shop by category | `category-accessories` | Top-down still life |
| Craft and tailoring | `craft-cloth` | Top-down |
| Craft and tailoring | `craft-hand` | Macro, side-on |
| Craft and tailoring | `craft-fit` | Over the shoulder |
| Heritage and visit | `heritage-left` | Location. Son front-facing, father behind |
| Heritage and visit | `heritage-right` | Location. Low along the counter, no people |
| Heritage and visit | `store-visit` | Location. Wide interior, chai in the foreground |
| Weddings we were part of | `story-01` | Location. Groom and bride, both to camera |
| Weddings we were part of | `story-02` | Location. Low angle, groom on horse |
| Weddings we were part of | `story-03` | Location. Son between his parents, front |
| Weddings we were part of | `story-04` | Location. Brothers walking at the camera |
| Mega menu tiles | `menu-groom` | Studio, front |
| Mega menu tiles | `menu-guest` | Studio, front, two friends |
| Mega menu tiles | `menu-party` | Studio, front, row of five |
| Mega menu tiles | `menu-family` | Studio, front, three generations |
| Mega menu tiles | `menu-tailoring` | Top-down |

## Order of work

- **P1** (22 images): the page looks finished with these alone.
- **P2** (19 images): menus, categories, stories, heritage.
- **P3** (14 images): hover details and mobile crops.

## Hero banners

Full-width, on location. Each one acts out its headline, so the picture and the words say the same thing.

### `hero-groom`

P1 · ratio 16:9 · size `3840x2160` · Location. Groom front-facing, father beside him, mother in the doorway

Sits with: "Your Father Ties the Safa. We Do the Rest."

```text
Scene: a quiet room in an old Gujarati haveli on the wedding morning, carved wooden window, a brass lamp on a low table.
People: a groom of 28, lean, wheatish skin, clean-shaven, short side-parted hair, in an ivory sherwani with gold zari; his father, 58, round face, grey hair, salt-and-pepper moustache, in a champagne silk bandhgala; his mother, 54, in a maroon and gold silk saree, in the doorway behind them, soft and slightly out of focus.
Pose and gaze: the groom sits upright on a wooden stool facing the camera squarely, hands on his knees, eyes straight into the lens with a small proud smile; his father stands close at his side, both hands winding a cream safa around his son's head, looking down at his work; the mother watches from the doorway with her hands pressed together, smiling with wet eyes.
Camera: full-frame, 50mm, f/2.8, eye level with the seated groom.
Composition: wide horizontal banner, the men placed in the right half, the left third and the bottom third kept darker and uncluttered because a headline sits there, all heads fully inside the frame.
Light: soft morning window light from the right, warm and low.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Who is in the frame: the men in White House clothes are the main subject and the sharpest, best-lit people in the picture. Women appear only as the family and guests who would naturally be there, dressed for the occasion, and never as posed models. The men's posture stays grounded and masculine: no twirling, no swaying hips, no hand near the face or hair, no henna on any man's hand.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. Everyone is an ordinary good-looking Gujarati person, and a different individual from any earlier image.
```

### `hero-guest`

P1 · ratio 16:9 · size `3840x2160` · Location. Friends dancing at the front of the jaan, family behind

Sits with: "You Dance in Your Brother's Jaan Only Once."

```text
Scene: a baraat on a Vadodara street at dusk, a dhol player and strings of lights soft in the background, the groom on a decorated horse far behind and out of focus.
People: four male friends aged 22 to 34 with clearly different heights, builds, hair and beards: one in a navy Jodhpuri, one in a sage kurta with a printed Nehru jacket, one in a maroon kurta set with a stole, one in a mustard kurta with a cream jacket; behind them the rest of the jaan dancing: aunts and sisters in bright sarees and chaniya choli, uncles in kurtas, a few children, all slightly soft.
Pose and gaze: the four friends dance at the front of the procession, bhangra-style with both arms up and fists or pointed fingers raised, shoulders bouncing, all laughing, two looking straight into the lens and two looking at each other; the women and elders behind clap and dance with their hands raised.
Camera: full-frame, 35mm, f/2.8, eye level, slight motion in the raised hands.
Composition: wide horizontal banner, the men placed in the right half, the left third and the bottom third kept darker and uncluttered because a headline sits there, all heads fully inside the frame.
Light: blue dusk sky with warm tungsten from the procession lights.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Who is in the frame: the men in White House clothes are the main subject and the sharpest, best-lit people in the picture. Women appear only as the family and guests who would naturally be there, dressed for the occasion, and never as posed models. The men's posture stays grounded and masculine: no twirling, no swaying hips, no hand near the face or hair, no henna on any man's hand.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. Everyone is an ordinary good-looking Gujarati person, and a different individual from any earlier image.
```

### `hero-festive`

P1 · ratio 16:9 · size `3840x2160` · Location. Whole family, front-facing

Sits with: "Nine Nights of Garba. One Morning of Saal Mubarak."

```text
Scene: the stone steps of a haveli lit with rows of oil lamps on the evening of Diwali, a marigold toran above the door.
People: one family of five: a grandfather of 70 with white hair and a white moustache in a cream silk kurta; a father of 41 with a short beard and glasses in a maroon silk kurta with a Nehru jacket; a mother of 38 in a red and gold saree; a son of 9 in a mirror-work kurta; a daughter of 6 in a small chaniya choli.
Pose and gaze: standing together on the steps facing the camera: the grandfather in the middle with a hand on the boy's shoulder, the father beside him with hands clasped in front, the mother on the other side with a hand on her daughter's shoulder, the boy holding a lit diya in both hands at chest height; all looking into the lens, relaxed smiles.
Camera: full-frame, 50mm, f/2.8, eye level.
Composition: wide horizontal banner, the men placed in the right half, the left third and the bottom third kept darker and uncluttered because a headline sits there, all heads fully inside the frame.
Light: warm lamp light from below and the side against a deep blue evening.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Who is in the frame: the men in White House clothes are the main subject and the sharpest, best-lit people in the picture. Women appear only as the family and guests who would naturally be there, dressed for the occasion, and never as posed models. The men's posture stays grounded and masculine: no twirling, no swaying hips, no hand near the face or hair, no henna on any man's hand.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. Everyone is an ordinary good-looking Gujarati person, and a different individual from any earlier image.
```

## Hero, mobile crops (optional)

Attach the matching desktop hero and ask for a vertical reframe. The only place a reference image is used.

### `hero-groom-mobile`

P3 · ratio 4:5 · size `1632x2048` · Reframe

```text
Using the attached image as reference, recreate the same scene, men, outfits and light as a vertical frame. People centred in the upper two thirds, lower third dark and uncluttered.
Avoid: text, lettering, logos, watermarks, borders.
```

### `hero-guest-mobile`

P3 · ratio 4:5 · size `1632x2048` · Reframe

```text
Using the attached image as reference, recreate the same scene, men, outfits and light as a vertical frame. People centred in the upper two thirds, lower third dark and uncluttered.
Avoid: text, lettering, logos, watermarks, borders.
```

### `hero-festive-mobile`

P3 · ratio 4:5 · size `1632x2048` · Reframe

```text
Using the attached image as reference, recreate the same scene, men, outfits and light as a vertical frame. People centred in the upper two thirds, lower third dark and uncluttered.
Avoid: text, lettering, logos, watermarks, borders.
```

## Shop by occasion

Headline: From the First Pithi to the Last Photo. Studio shots: one man, one backdrop colour per function, the way menswear labels shoot their category tiles.

### `occasion-pithi`

P1 · ratio 3:4 · size `1536x2048` · Studio, front, laughing

Sits with: "Pithi"

```text
Scene: a photo studio with a seamless warm mustard-yellow paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room, a single string of marigolds hanging at one edge.
People: a man of 23, slim, light stubble, short curly hair, in a yellow cotton kurta with sleeves pushed up and a white churidar.
Pose and gaze: standing square to the camera, hands on his hips, laughing straight into the lens, a streak of turmeric paste across one cheek and on the kurta collar.
Camera: full-frame, 85mm, f/4, eye level, studio, three-quarter length.
Composition: vertical frame, head in the upper-middle and well clear of the top corners because the top is cropped into an arch, bottom fifth darker for a caption.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `occasion-mehendi`

P1 · ratio 3:4 · size `1536x2048` · Studio, three-quarter left, hands in pockets

Sits with: "Mehendi"

```text
Scene: a photo studio with a seamless deep bottle-green paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 29, medium build, thin gold-rimmed glasses, neat short beard, in an emerald silk kurta with a floral printed Nehru jacket.
Pose and gaze: body turned slightly to the left, both hands in his trouser pockets, hands clean with no henna, head turned to the camera with a relaxed half-smile.
Camera: full-frame, 85mm, f/4, eye level, studio, three-quarter length.
Composition: vertical frame, head in the upper-middle and well clear of the top corners because the top is cropped into an arch, bottom fifth darker for a caption.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `occasion-sangeet`

P1 · ratio 3:4 · size `1536x2048` · Studio, front, dandiya on the shoulder

Sits with: "Sangeet and garba"

```text
Scene: a photo studio with a seamless midnight navy paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 30, tall, dark-brown skin, moustache only, short hair, in a deep navy mirror-work kurta with white trousers.
Pose and gaze: standing square to the camera, feet apart, a pair of dandiya sticks resting across one shoulder held in one hand, the other hand in his pocket, a wide grin into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio, three-quarter length.
Composition: vertical frame, head in the upper-middle and well clear of the top corners because the top is cropped into an arch, bottom fifth darker for a caption.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `occasion-lagna`

P1 · ratio 3:4 · size `1536x2048` · Studio, front, composed

Sits with: "Lagna"

```text
Scene: a photo studio with a seamless deep maroon paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a groom of 31, broad shoulders, medium-brown skin, full short beard, in a maroon and antique-gold sherwani with a maroon safa and a pearl mala.
Pose and gaze: standing tall and square to the camera, hands clasped in front at the waist, chin level, a calm steady look into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio, three-quarter length.
Composition: vertical frame, head in the upper-middle and well clear of the top corners because the top is cropped into an arch, bottom fifth darker for a caption.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `occasion-reception`

P1 · ratio 3:4 · size `1536x2048` · Studio, front, fastening a button

Sits with: "Reception"

```text
Scene: a photo studio with a seamless charcoal grey paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 34, heavy-set, round face, trimmed beard, slicked-back hair, in a tailored black Indo-western jacket with tonal embroidery.
Pose and gaze: square to the camera, fastening his jacket button with one hand, the other hand at his side, an easy confident smile into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio, three-quarter length.
Composition: vertical frame, head in the upper-middle and well clear of the top corners because the top is cropped into an arch, bottom fifth darker for a caption.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

## The Groom's Edit

Headline: Your Turn at the Mirror. The feature is that sentence, literally. The three small cards are studio shots on a dark backdrop.

### `groom-feature`

P1 · ratio 4:5 · size `1632x2048` · Location. Face seen front-on in the mirror

Sits with: "Your Turn at the Mirror"

```text
Scene: the fitting corner of a long-established menswear shop, a tall brass-framed mirror, dark wooden shelves of folded cloth.
People: a groom of 27, slim, fair-wheatish skin, light stubble, in an ivory and gold sherwani; a master tailor in his sixties, spectacles on a cord, measuring tape around his neck, white shirt.
Pose and gaze: the camera stands behind the groom's right shoulder: his shoulder is soft in the foreground and his face is seen clearly, front-on, in the mirror, standing straight with hands at his sides, looking at his own reflection with a quiet, moved expression; the tailor kneels at his side pinning the hem.
Camera: full-frame, 50mm, f/2.8, eye level.
Composition: vertical frame, the reflection slightly left of centre, the right edge falling into shadow so it blends into a dark panel.
Light: warm tungsten shop light with deep burgundy shadows.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `groom-sherwani`

P2 · ratio 3:4 · size `1536x2048` · Studio, front

Sits with: "Sherwani"

```text
Scene: a photo studio with a seamless deep burgundy paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 33, athletic, short cropped hair, heavy stubble, in a classic cream sherwani with gold zari.
Pose and gaze: square to the camera, one hand resting on the button placket, direct look into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, model centred, cropped at mid-thigh.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `groom-jodhpuri`

P2 · ratio 3:4 · size `1536x2048` · Studio, front, arms crossed

Sits with: "Jodhpuri"

```text
Scene: a photo studio with a seamless deep burgundy paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 38, lean, greying temples, clean-shaven, in a black Jodhpuri bandhgala with a small gold brooch.
Pose and gaze: square to the camera, arms loosely crossed, calm look into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, model centred, cropped at mid-thigh.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `groom-indowestern`

P2 · ratio 3:4 · size `1536x2048` · Studio, three-quarter right, adjusting cuff

Sits with: "Indo-Western"

```text
Scene: a photo studio with a seamless deep burgundy paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 25, slim, short textured hair, thin moustache, in a draped dusty-rose Indo-western set with an asymmetric hem.
Pose and gaze: body turned slightly to the right, adjusting his left cuff, head up and eyes to the camera.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, model centred, cropped at mid-thigh.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

## Wedding party

Headline: The Whole Jaan, Dressed as One. Studio, one backdrop and palette, four different men.

### `party-groom`

P1 · ratio 3:4 · size `1536x2048` · Studio, front, full length

Sits with: "Varraja"

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room. All four party images use one palette of ivory, champagne and soft gold on the same backdrop, as if dressed together..
People: a groom of 29, medium build, neat full beard, side-swept hair, in an ivory sherwani with a champagne safa.
Pose and gaze: standing square to the camera, hands clasped in front, gentle smile into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `party-father`

P1 · ratio 3:4 · size `1536x2048` · Studio, three-quarter left

Sits with: "Pappa"

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room. All four party images use one palette of ivory, champagne and soft gold on the same backdrop, as if dressed together..
People: a man of 60, thin, bald crown, trimmed white beard, in a champagne silk bandhgala with a matching safa.
Pose and gaze: body turned slightly to the left, straightening his cuff, eyes to the camera with a proud smile.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `party-brothers`

P1 · ratio 3:4 · size `1536x2048` · Studio, front, arm over shoulder

Sits with: "Bhai and bhaibandh"

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room. All four party images use one palette of ivory, champagne and soft gold on the same backdrop, as if dressed together..
People: two men: one 26, stocky, clean-shaven, dimples; one 23, tall and thin, patchy beard, glasses; both in champagne kurta sets with ivory embroidered Nehru jackets.
Pose and gaze: standing side by side facing the camera, the taller one with an arm over the other's shoulder, both laughing into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `party-kids`

P1 · ratio 3:4 · size `1536x2048` · Studio, front, child's eye level

Sits with: "Tabariya"

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room. All four party images use one palette of ivory, champagne and soft gold on the same backdrop, as if dressed together..
People: a boy of 7, gap-toothed, messy hair, in a miniature ivory kurta jacket set with a small safa slightly crooked.
Pose and gaze: standing with feet apart and arms crossed like a grown-up, chin up, grinning straight into the lens.
Camera: full-frame, 85mm, f/4, camera low at the child's eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

## Featured collection

Headline: See It Here. Feel It in the Shop. Studio catalogue shots: front-facing, full outfit, eight different men aged 5 to 48 so every shopper sees someone like himself.

### `product-01`

P1 · ratio 3:4 · size `1536x2048` · Studio, front

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 29, medium build, short beard, in an ivory sherwani with gold zari embroidery.
Pose and gaze: standing square to the camera, hands relaxed at his sides, looking into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `product-01-detail`

P3 · ratio 3:4 · size `1536x2048` · Macro

```text
Scene: the garment on a tailor's wooden form in the studio.
Subject: extreme close-up of gold zari embroidery on an ivory sherwani collar and button placket, individual threads visible.
Camera: full-frame, 100mm macro, f/5.6.
Composition: vertical frame, detail fills the frame, soft falloff at the edges.
Light: raking side light that shows texture.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `product-02`

P1 · ratio 3:4 · size `1536x2048` · Studio, three-quarter left

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 34, broad, full dark beard, shaved head, in a maroon velvet sherwani with antique gold work.
Pose and gaze: body turned slightly to the left, one hand at the collar, eyes to the camera.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `product-02-detail`

P3 · ratio 3:4 · size `1536x2048` · Macro

```text
Scene: the garment on a tailor's wooden form in the studio.
Subject: extreme close-up of antique gold embroidery on maroon velvet, individual threads visible.
Camera: full-frame, 100mm macro, f/5.6.
Composition: vertical frame, detail fills the frame, soft falloff at the edges.
Light: raking side light that shows texture.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `product-03`

P1 · ratio 3:4 · size `1536x2048` · Studio, walking toward camera

```text
Scene: a photo studio with a seamless soft stone-grey paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 41, lean, salt-and-pepper hair, clean-shaven, in a midnight-blue Jodhpuri bandhgala suit.
Pose and gaze: walking straight toward the camera mid-stride, one hand in his trouser pocket, steady look into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `product-03-detail`

P3 · ratio 3:4 · size `1536x2048` · Macro

```text
Scene: the garment on a tailor's wooden form in the studio.
Subject: extreme close-up of a bandhgala collar, covered buttons and a folded pocket square on midnight-blue suiting, individual threads visible.
Camera: full-frame, 100mm macro, f/5.6.
Composition: vertical frame, detail fills the frame, soft falloff at the edges.
Light: raking side light that shows texture.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `product-04`

P1 · ratio 3:4 · size `1536x2048` · Studio, front, seated

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 25, slim, short wavy hair, clean-shaven, glasses, in a pastel sage Indo-western set with a draped stole.
Pose and gaze: seated on a plain wooden stool facing the camera, knees apart, forearms resting on his thighs, relaxed smile into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `product-04-detail`

P3 · ratio 3:4 · size `1536x2048` · Macro

```text
Scene: the garment on a tailor's wooden form in the studio.
Subject: extreme close-up of tonal thread embroidery on sage fabric, individual threads visible.
Camera: full-frame, 100mm macro, f/5.6.
Composition: vertical frame, detail fills the frame, soft falloff at the edges.
Light: raking side light that shows texture.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `product-05`

P1 · ratio 3:4 · size `1536x2048` · Studio, three-quarter right

```text
Scene: a photo studio with a seamless soft stone-grey paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 37, stocky, moustache, thinning hair, in a cream silk kurta with a printed Nehru jacket.
Pose and gaze: body turned slightly to the right, thumbs hooked in his jacket pockets, laughing toward the camera.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `product-05-detail`

P3 · ratio 3:4 · size `1536x2048` · Macro

```text
Scene: the garment on a tailor's wooden form in the studio.
Subject: extreme close-up of the fabric, buttons and collar of a printed Nehru jacket, individual threads visible.
Camera: full-frame, 100mm macro, f/5.6.
Composition: vertical frame, detail fills the frame, soft falloff at the edges.
Light: raking side light that shows texture.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `product-06`

P2 · ratio 3:4 · size `1536x2048` · Studio, front, dandiya in hand

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 22, lanky, short curly hair, light stubble, in a bright mirror-work Navratri kurta with white trousers.
Pose and gaze: standing square to the camera, feet apart, holding a pair of dandiya sticks down at his side in one hand, big grin into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `product-06-detail`

P3 · ratio 3:4 · size `1536x2048` · Macro

```text
Scene: the garment on a tailor's wooden form in the studio.
Subject: extreme close-up of small mirrors and multicolour thread embroidery, individual threads visible.
Camera: full-frame, 100mm macro, f/5.6.
Composition: vertical frame, detail fills the frame, soft falloff at the edges.
Light: raking side light that shows texture.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `product-07`

P2 · ratio 3:4 · size `1536x2048` · Studio, front, slightly low angle

```text
Scene: a photo studio with a seamless soft stone-grey paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 48, solid build, grey at the temples, trimmed grey beard, in a charcoal made-to-measure three-piece suit.
Pose and gaze: square to the camera, hands in his trouser pockets, jacket open to show the waistcoat, steady look into the lens.
Camera: full-frame, 85mm, f/4, slightly low angle, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `product-07-detail`

P3 · ratio 3:4 · size `1536x2048` · Macro

```text
Scene: the garment on a tailor's wooden form in the studio.
Subject: extreme close-up of hand-finished lapel stitching and a waistcoat edge on charcoal wool, individual threads visible.
Camera: full-frame, 100mm macro, f/5.6.
Composition: vertical frame, detail fills the frame, soft falloff at the edges.
Light: raking side light that shows texture.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `product-08`

P2 · ratio 3:4 · size `1536x2048` · Studio, front

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a boy of 5, chubby cheeks, short hair, in a kurta with an embroidered jacket.
Pose and gaze: standing facing the camera with his hands in his jacket pockets, big grin into the lens.
Camera: full-frame, 85mm, f/4, camera low at the child's eye level, studio.
Composition: vertical frame, full outfit visible from head to shoes, even margins on all sides.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `product-08-detail`

P3 · ratio 3:4 · size `1536x2048` · Macro

```text
Scene: the garment laid flat in the studio.
Subject: extreme close-up of embroidery on a boy's festive jacket, individual threads visible.
Camera: full-frame, 100mm macro, f/5.6.
Composition: vertical frame, detail fills the frame.
Light: raking side light.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

## Shop by category

Headline: Know What You Came For? Studio close-ups, shown as circles.

### `category-groom`

P2 · ratio 1:1 · size `2048x2048` · Studio, front, close

Sits with: "Groom Wear"

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a groom of 30, dark-brown skin, strong nose, trimmed beard, in a cream safa with a brooch and a cream sherwani.
Pose and gaze: head and shoulders, square to the camera, composed look into the lens.
Camera: full-frame, 105mm, f/4, eye level, studio.
Composition: square frame, subject centred with generous margin because the image is cropped to a circle.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `category-suits`

P2 · ratio 1:1 · size `2048x2048` · Studio, front, close

Sits with: "Suits and Blazers"

```text
Scene: a photo studio with a seamless soft stone-grey paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 45, square jaw, grey temples, clean-shaven, in a navy tailored suit, white shirt and tie.
Pose and gaze: head and chest, square to the camera, one hand straightening his tie knot, eyes into the lens.
Camera: full-frame, 105mm, f/4, eye level, studio.
Composition: square frame, subject centred with generous margin because the image is cropped to a circle.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `category-kurta`

P2 · ratio 1:1 · size `2048x2048` · Studio, three-quarter right

Sits with: "Kurtas and Jackets"

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a man of 24, round glasses, short curly hair, clean-shaven, in a pastel kurta with a Nehru jacket.
Pose and gaze: head and chest, turned slightly to the right, laughing toward the camera.
Camera: full-frame, 105mm, f/4, eye level, studio.
Composition: square frame, subject centred with generous margin because the image is cropped to a circle.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `category-family`

P2 · ratio 1:1 · size `2048x2048` · Studio, front, both to camera

Sits with: "Father and Son"

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a father of 36 with a short beard in a maroon kurta with a jacket; his son of 6 in the same outfit in miniature.
Pose and gaze: the father crouches on one knee beside the standing boy with an arm around his shoulders, both facing the camera and grinning into the lens.
Camera: full-frame, 85mm, f/4, child's eye level, studio.
Composition: square frame, subject centred with generous margin because the image is cropped to a circle.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `category-accessories`

P2 · ratio 1:1 · size `2048x2048` · Top-down still life

Sits with: "Accessories"

```text
Scene: a surface of maroon velvet in the studio.
Subject: a folded safa, a pearl mala, a pair of men's embroidered mojdi and a brooch, arranged with space between them.
Camera: full-frame, 50mm, f/5.6, from directly above.
Composition: square frame, subject centred with generous margin because the image is cropped to a circle.
Light: soft top light.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

## Craft and tailoring

Headline: Where Every Rupee Goes. Hands and cloth, close and tactile. Men's hands only.

### `craft-cloth`

P1 · ratio 4:5 · size `1632x2048` · Top-down

Sits with: "The Cloth"

```text
Scene: a shop counter covered in a white sheet, seen from above.
Subject: three bolts of silk and brocade in ivory, gold and maroon unrolled across the counter; a male customer's hand feeling one cloth between finger and thumb, a shopkeeper's hand steadying the bolt.
Camera: full-frame, 35mm, f/4, from directly above.
Composition: vertical frame, cloth running diagonally, the two hands in the lower third.
Light: daylight from a side window.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `craft-hand`

P1 · ratio 4:5 · size `1632x2048` · Macro, side-on

Sits with: "The Hand"

```text
Scene: an embroidery adda frame in a karigar's workshop.
Subject: an older craftsman's weathered hands, a thimble on one finger, pulling gold zari thread through maroon silk; individual threads catching the light.
Camera: full-frame, 100mm macro, f/4, low and side-on along the cloth.
Composition: vertical frame, needle and fingertips sharp in the centre, the rest soft.
Light: one warm lamp from the left.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `craft-fit`

P1 · ratio 4:5 · size `1632x2048` · Over the shoulder

Sits with: "The Fit"

```text
Scene: a tailoring room, chalk and shears on a wooden table.
Subject: seen from behind a male customer: a master tailor's hands drawing a measuring tape across the customer's shoulders over a half-stitched jacket with chalk marks.
Camera: full-frame, 50mm, f/2.8, over the customer's shoulder.
Composition: vertical frame, tape and hands in the centre, no faces visible.
Light: warm lamp light.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

## Heritage and visit

Headlines: A Shop That Remembers Your Family, and Come, Sit, Have Chai. Then We Talk Clothes.

### `heritage-left`

P2 · ratio 3:4 · size `1536x2048` · Location. Son front-facing, father behind

Sits with: "Fathers who stood here as grooms now stand behind their sons"

```text
Scene: the fitting area of an old menswear shop, wooden shelves behind.
People: a son of 26 in a half-finished sherwani with chalk marks; his father, 61, white hair, thick glasses, in a plain shirt.
Pose and gaze: the son stands facing the camera, arms slightly out for the fitting, smiling into the lens; the father stands just behind his shoulder, one hand pointing at the shoulder seam, looking at it closely.
Camera: full-frame, 50mm, f/2.8, eye level.
Composition: vertical frame, both figures in the middle, nothing important at the edges.
Light: warm tungsten shop light.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `heritage-right`

P2 · ratio 3:4 · size `1536x2048` · Location. Low along the counter, no people

Sits with: "The cloth has changed. The promise has not."

```text
Scene: a worn wooden shop counter polished by decades of use.
Subject: a brass yardstick, a coiled measuring tape, tailor's chalk and a closed cloth-bound ledger on the counter; shelves of folded suiting soft behind.
Camera: full-frame, 35mm, f/2.8, very low angle along the counter.
Composition: vertical frame, counter leading into depth.
Light: late afternoon light from the doorway.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

### `store-visit`

P1 · ratio 16:9 · size `3840x2160` · Location. Wide interior, chai in the foreground

Sits with: "Come, Sit, Have Chai. Then We Talk Clothes."

```text
Scene: inside a warm Indian menswear showroom in the evening, a white cushioned seating platform along one side, arched wooden niches with sherwanis on mannequins.
Subject: in the near foreground, low and to the left, a steel tray with two small glasses of cutting chai on the counter beside an unrolled length of ivory brocade; the showroom stretches behind, empty of people.
Camera: full-frame, 24mm, f/4, eye level.
Composition: wide horizontal banner, the centre kept calm and slightly darker so text can sit over it.
Light: warm spotlights and lamp light.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```

## Weddings we were part of

Layout samples only. Four different families. Replace with real customers, with permission, before launch.

### `story-01`

P2 · ratio 3:4 · size `1536x2048` · Location. Groom and bride, both to camera

```text
Scene: a wedding stage just after the varmala, flowers and guests soft behind.
People: a groom of 28, tall, clean-shaven, in an ivory sherwani and safa with a fresh garland; his bride, 26, in a red and white panetar with a garland.
Pose and gaze: standing side by side facing the camera, shoulders touching, the groom upright with hands clasped in front, both laughing into the lens.
Camera: full-frame, 85mm, f/2.8, eye level.
Composition: vertical frame, people in the upper two thirds, bottom third darker for a caption.
Light: warm stage light.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Who is in the frame: the men in White House clothes are the main subject and the sharpest, best-lit people in the picture. Women appear only as the family and guests who would naturally be there, dressed for the occasion, and never as posed models. The men's posture stays grounded and masculine: no twirling, no swaying hips, no hand near the face or hair, no henna on any man's hand.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. Everyone is an ordinary good-looking Gujarati person, and a different individual from any earlier image.
```

### `story-02`

P2 · ratio 3:4 · size `1536x2048` · Location. Low angle, groom on horse

```text
Scene: a baraat on a street at dusk.
People: a groom of 32, stocky, thick beard, in a maroon velvet sherwani and safa, on a decorated white horse; friends and family dancing around him, men and women with hands raised in the foreground.
Pose and gaze: seen from below among the crowd: the groom sits upright, one hand on the reins, looking down toward the camera and grinning.
Camera: full-frame, 35mm, f/2.8, low angle looking up.
Composition: vertical frame, people in the upper two thirds, bottom third darker for a caption.
Light: dusk sky with warm procession lights.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Who is in the frame: the men in White House clothes are the main subject and the sharpest, best-lit people in the picture. Women appear only as the family and guests who would naturally be there, dressed for the occasion, and never as posed models. The men's posture stays grounded and masculine: no twirling, no swaying hips, no hand near the face or hair, no henna on any man's hand.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. Everyone is an ordinary good-looking Gujarati person, and a different individual from any earlier image.
```

### `story-03`

P2 · ratio 3:4 · size `1536x2048` · Location. Son between his parents, front

```text
Scene: a haveli corridor with arches, morning.
People: a son of 27, the groom, in a dark bandhgala and safa; his father, 59, in a matching bandhgala; his mother, 55, in a cream and gold silk saree.
Pose and gaze: the son stands in the middle facing the camera, smiling into the lens, an arm around each parent; the mother reaches up to straighten his collar, the father looks at him with pride.
Camera: full-frame, 85mm, f/2.8, eye level.
Composition: vertical frame, people in the upper two thirds, bottom third darker for a caption.
Light: soft morning light from the arches on the left.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Who is in the frame: the men in White House clothes are the main subject and the sharpest, best-lit people in the picture. Women appear only as the family and guests who would naturally be there, dressed for the occasion, and never as posed models. The men's posture stays grounded and masculine: no twirling, no swaying hips, no hand near the face or hair, no henna on any man's hand.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. Everyone is an ordinary good-looking Gujarati person, and a different individual from any earlier image.
```

### `story-04`

P2 · ratio 3:4 · size `1536x2048` · Location. Brothers walking at the camera

```text
Scene: a courtyard with marigold strings overhead.
People: four brothers and cousins aged 21 to 33, clearly different heights, builds and beards, in coordinated ivory and champagne kurta jacket sets.
Pose and gaze: walking toward the camera in a loose line, hands in pockets or on each other's shoulders, mid-laugh, three looking at the lens.
Camera: full-frame, 50mm, f/2.8, eye level.
Composition: vertical frame, people in the upper two thirds, bottom third darker for a caption.
Light: bright open shade.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

## Mega menu tiles

Small studio tiles inside the header menu.

### `menu-groom`

P2 · ratio 4:3 · size `2048x1536` · Studio, front

Sits with: "I'm the Groom"

```text
Scene: a photo studio with a seamless warm amber-brown paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a groom of 26, slim, glasses, light beard, in a cream sherwani and safa.
Pose and gaze: half length, square to the camera, hands clasped, a quiet smile into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: horizontal frame, subject in the right half, lower-left kept darker and simple for overlaid text.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `menu-guest`

P2 · ratio 4:3 · size `2048x1536` · Studio, front, two friends

Sits with: "I'm attending a Wedding"

```text
Scene: a photo studio with a seamless burnt orange paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: two friends: one 35 with a receding hairline, glasses and a short beard in a navy kurta jacket set; one 28, clean-shaven with short hair in a mustard kurta.
Pose and gaze: side by side facing the camera, one with an elbow on the other's shoulder, both laughing into the lens.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: horizontal frame, subject in the right half, lower-left kept darker and simple for overlaid text.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `menu-party`

P3 · ratio 4:3 · size `2048x1536` · Studio, front, row of five

Sits with: "Dress the Whole Party"

```text
Scene: a photo studio with a seamless warm ivory paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: five men aged 8 to 62 of different heights and builds: a groom, his father, two brothers and a nephew, in coordinated ivory and champagne outfits with matching safas.
Pose and gaze: standing in a row facing the camera, shoulders touching, hands clasped or in pockets, all smiling into the lens.
Camera: full-frame, 50mm, f/4, eye level, studio.
Composition: horizontal frame, subject in the right half, lower-left kept darker and simple for overlaid text.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `menu-family`

P3 · ratio 4:3 · size `2048x1536` · Studio, front, three generations

Sits with: "Festive Family Sets"

```text
Scene: a photo studio with a seamless deep maroon paper backdrop that curves into the floor, a soft natural shadow under the feet, nothing else in the room.
People: a grandfather of 68, a father of 38 and a son of 7 in matching mustard and maroon festive kurtas.
Pose and gaze: the boy stands in front, the father and grandfather behind with a hand each on his shoulders, all three facing the camera and smiling.
Camera: full-frame, 85mm, f/4, eye level, studio.
Composition: horizontal frame, subject in the right half, lower-left kept darker and simple for overlaid text.
Light: one large soft key light from the front left, gentle fill, a faint rim on the shoulder, clean catchlights in the eyes.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. Natural skin with pores, slight unevenness and a little shine; real stubble and stray hairs; fabric with true weight, small creases at the elbows and a visible weave; embroidery that follows the cut of the garment. No beauty retouching, no waxy skin, no glow, no over-sharpening, no fantasy lighting.
Men only: every person in the frame is male. Posture is grounded and masculine: weight on both feet, shoulders square, hands relaxed, in a pocket, clasped, or busy with a cuff, button or collar. No twirling, no swaying hips, no raised wrists, no hand near the face or hair, no henna on any hand, no flowers held, no women anywhere in the frame.
Avoid: text, lettering, logos, watermarks, signage, borders. No extra fingers or limbs, no warped embroidery, no film-star lookalike. He is an ordinary good-looking Gujarati man, and a different individual from any earlier image.
```

### `menu-tailoring`

P3 · ratio 4:3 · size `2048x1536` · Top-down

Sits with: "Fitted by Master Tailors"

```text
Scene: dark charcoal suiting fabric seen from directly above.
Subject: a tailor's chalk, a measuring tape and shears arranged neatly.
Camera: full-frame, 50mm, f/5.6, from directly above.
Composition: horizontal frame, objects on the right half, left half empty fabric.
Light: soft top light.
Realism: a real campaign photograph for an Indian menswear label, shot on a full-frame camera. True fabric weight, visible weave and thread. No glow, no over-sharpening.
Avoid: text, lettering, logos, watermarks, signage, borders, people's faces.
```
