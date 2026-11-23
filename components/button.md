# Button

## Overview

Button is a configurable action component with six visual variants, eight sizes, editable label text, and optional leading and trailing glyphs. Persistent disabled and loading behavior is exposed separately from transient hover and pressed states; loading replaces the leading glyph with a loader while keeping the label visible. The specification records measured structure and color coverage across the extracted variants and platform accessibility guidance for VoiceOver, TalkBack, and ARIA.

**Source:** [Figma](https://www.figma.com/design/2CYLiC2sbHkLu0VikBWuUT/TEST.1?node-id=3-1966) · **Variants:** Variant: default | outline | secondary | ghost | destructive | link; Size: default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg; State: Default | Hover | Pressed | Disabled | Loading

## Composition

- **Button icons** — constitutive · 3:45. Set by designer in the uSpec Extract plugin.
- **Decorative children:** 1; documented through Structure and Color.

## Anatomy

```text
Variant=default, Size=default, State=Default (component)
├─ Leading icon (instance)
│  └─ Add glyph (frame)
│     └─ Add stroke (vector)
├─ Label (text)
└─ Trailing icon (instance)
   └─ Arrow right glyph (frame)
      └─ Arrow right stroke (vector)
```

## Implementation invariants

- Optional-property defaults: `variant`=default, `size`=default, `isDisabled`=false, `isLoading`=false, `hasLeadingIcon`=false, `trailingIcon`=none, `label`=Button.
- The Size axis changes control height and padding; horizontal width is content-hugging. The selected icon component set exposes Add, Arrow right, and Loader glyph variants.
- Accessibility focus stops: 1; visual variants must not alter reading order.

## API

> Leading content resolves by priority: isLoading → hasLeadingIcon → none. When isLoading=true, the leading glyph is replaced with Loader and the label remains visible. The default Loading variant shows the spinner without a trailing glyph; whether a configured trailing icon can appear simultaneously was not captured. Disabled and Loading are separate State variants in the source; a combined appearance was not measured.

### Component API

| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| variant | enum | default \| outline \| secondary \| ghost \| destructive \| link | default | Visual style of the button. |
| size | enum | default \| xs \| sm \| lg \| icon \| icon-xs \| icon-sm \| icon-lg | default | Controls the button dimensions. |
| isDisabled | boolean | true \| false | false | Prevents activation and applies the disabled appearance. |
| isLoading | boolean | true \| false | false | Shows the loading glyph in the leading position while keeping the label visible. |
| hasLeadingIcon | boolean | true \| false | false | Shows the configured leading glyph unless isLoading replaces it with the loader. |
| trailingIcon | enum | none \| icon | none | Shows the configured trailing glyph when set to icon. |
| label | string | — | Button | Text displayed by the button. |

### Button icons — Leading icon

| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| glyph | enum | Add \| Arrow right \| Loader | Add | Glyph shown when hasLeadingIcon=true; isLoading replaces it with Loader. |

### Button icons — Trailing icon

| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| glyph | enum | Add \| Arrow right \| Loader | Arrow right | Glyph shown when trailingIcon=icon. |

### Default action

| Property | Value | Notes |
|---|---|---|
| variant | default | Default visual style. |
| size | default | Default dimensions. |
| label | Continue | Primary action text. |
| isDisabled | false | Enabled. |
| isLoading | false | Not loading. |
| hasLeadingIcon | false | No leading glyph. |
| trailingIcon | none | No trailing glyph. |

### Outlined action with a leading icon

| Property | Value | Notes |
|---|---|---|
| variant | outline | Outlined visual style. |
| size | sm | Small dimensions. |
| label | Add item | Action text. |
| hasLeadingIcon | true | Uses the default Add glyph. |
| trailingIcon | none | No trailing glyph. |

### Action with a trailing icon

| Property | Value | Notes |
|---|---|---|
| variant | link | Link-style visual variant. |
| label | Learn more | Action text. |
| hasLeadingIcon | false | No leading glyph. |
| trailingIcon | icon | Uses the default Arrow right glyph. |

### Loading action

| Property | Value | Notes |
|---|---|---|
| variant | default | Default visual style. |
| label | Saving | Loading action text remains visible. |
| isLoading | true | The leading loader is visible. |
| hasLeadingIcon | false | The loader is controlled by isLoading. |
| trailingIcon | none | No trailing glyph. |

## Structure

### Button — default

default visual variant; dimensions shown across Size at Default state.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Button | – | – | – | – | – | – | – | – | Host button container |
| ↳ height | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | Height follows Size tokens; icon sizes stay square. |
| ↳ itemSpacing | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | Token gap between icon and label. |
| ↳ verticalPadding | spacing/padding/button-block (15) | spacing/button/padding-xs-block (6) | spacing/button/padding-sm-block (10) | spacing/padding/button-block (15) | — | — | — | — | Vertical inset scales with control size. |
| ↳ horizontalPadding | spacing/padding/button-inline (24) | spacing/button/padding-xs-inline (12) | spacing/button/padding-sm-inline (16) | spacing/button/padding-lg-inline (32) | — | — | — | — | Horizontal inset scales with control size. |
| ↳ cornerRadius | 100 | 100 | 100 | 100 | 9999 | 9999 | 9999 | 9999 | 100px produces a pill silhouette. |
| ↳ borderWidth | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | Variant controls visible stroke weight. |
| ↳ widthMode | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | Content width hugs its children. |
| textStyle | Button/default | Button/xs | Button/sm | Button/lg | Button/default | Button/xs | Button/sm | Button/lg | Label style varies with Size. |
| fontSize | 18 | 14 | 16 | 18 | 18 | 14 | 16 | 18 | Resolved label typography field. |
| fontFamily | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | Resolved label typography field. |
| fontWeight | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | Resolved label typography field. |
| lineHeight | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | Resolved label typography field. |
| letterSpacing | -0.18 | -0.14 | — | -0.18 | -0.18 | -0.14 | — | -0.18 | Resolved label typography field. |

### Button — outline

outline visual variant; dimensions shown across Size at Default state.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Button | – | – | – | – | – | – | – | – | Host button container |
| ↳ height | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | Height follows Size tokens; icon sizes stay square. |
| ↳ itemSpacing | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | Token gap between icon and label. |
| ↳ verticalPadding | spacing/padding/button-block (15) | spacing/button/padding-xs-block (6) | spacing/button/padding-sm-block (10) | spacing/padding/button-block (15) | — | — | — | — | Vertical inset scales with control size. |
| ↳ horizontalPadding | spacing/padding/button-inline (24) | spacing/button/padding-xs-inline (12) | spacing/button/padding-sm-inline (16) | spacing/button/padding-lg-inline (32) | — | — | — | — | Horizontal inset scales with control size. |
| ↳ cornerRadius | 100 | 100 | 100 | 100 | 9999 | 9999 | 9999 | 9999 | 100px produces a pill silhouette. |
| ↳ borderWidth | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | Variant controls visible stroke weight. |
| ↳ widthMode | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | Content width hugs its children. |
| textStyle | Button/default | Button/xs | Button/sm | Button/lg | Button/default | Button/xs | Button/sm | Button/lg | Label style varies with Size. |
| fontSize | 18 | 14 | 16 | 18 | 18 | 14 | 16 | 18 | Resolved label typography field. |
| fontFamily | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | Resolved label typography field. |
| fontWeight | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | Resolved label typography field. |
| lineHeight | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | Resolved label typography field. |
| letterSpacing | -0.18 | -0.14 | — | -0.18 | -0.18 | -0.14 | — | -0.18 | Resolved label typography field. |

### Button — secondary

secondary visual variant; dimensions shown across Size at Default state.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Button | – | – | – | – | – | – | – | – | Host button container |
| ↳ height | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | Height follows Size tokens; icon sizes stay square. |
| ↳ itemSpacing | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | Token gap between icon and label. |
| ↳ verticalPadding | spacing/padding/button-block (15) | spacing/button/padding-xs-block (6) | spacing/button/padding-sm-block (10) | spacing/padding/button-block (15) | — | — | — | — | Vertical inset scales with control size. |
| ↳ horizontalPadding | spacing/padding/button-inline (24) | spacing/button/padding-xs-inline (12) | spacing/button/padding-sm-inline (16) | spacing/button/padding-lg-inline (32) | — | — | — | — | Horizontal inset scales with control size. |
| ↳ cornerRadius | 100 | 100 | 100 | 100 | 9999 | 9999 | 9999 | 9999 | 100px produces a pill silhouette. |
| ↳ borderWidth | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | Variant controls visible stroke weight. |
| ↳ widthMode | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | Content width hugs its children. |
| textStyle | Button/default | Button/xs | Button/sm | Button/lg | Button/default | Button/xs | Button/sm | Button/lg | Label style varies with Size. |
| fontSize | 18 | 14 | 16 | 18 | 18 | 14 | 16 | 18 | Resolved label typography field. |
| fontFamily | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | Resolved label typography field. |
| fontWeight | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | Resolved label typography field. |
| lineHeight | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | Resolved label typography field. |
| letterSpacing | -0.18 | -0.14 | — | -0.18 | -0.18 | -0.14 | — | -0.18 | Resolved label typography field. |

### Button — ghost

ghost visual variant; dimensions shown across Size at Default state.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Button | – | – | – | – | – | – | – | – | Host button container |
| ↳ height | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | Height follows Size tokens; icon sizes stay square. |
| ↳ itemSpacing | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | Token gap between icon and label. |
| ↳ verticalPadding | spacing/padding/button-block (15) | spacing/button/padding-xs-block (6) | spacing/button/padding-sm-block (10) | spacing/padding/button-block (15) | — | — | — | — | Vertical inset scales with control size. |
| ↳ horizontalPadding | spacing/padding/button-inline (24) | spacing/button/padding-xs-inline (12) | spacing/button/padding-sm-inline (16) | spacing/button/padding-lg-inline (32) | — | — | — | — | Horizontal inset scales with control size. |
| ↳ cornerRadius | 100 | 100 | 100 | 100 | 9999 | 9999 | 9999 | 9999 | 100px produces a pill silhouette. |
| ↳ borderWidth | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | Variant controls visible stroke weight. |
| ↳ widthMode | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | Content width hugs its children. |
| textStyle | Button/default | Button/xs | Button/sm | Button/lg | Button/default | Button/xs | Button/sm | Button/lg | Label style varies with Size. |
| fontSize | 18 | 14 | 16 | 18 | 18 | 14 | 16 | 18 | Resolved label typography field. |
| fontFamily | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | Resolved label typography field. |
| fontWeight | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | Resolved label typography field. |
| lineHeight | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | Resolved label typography field. |
| letterSpacing | -0.18 | -0.14 | — | -0.18 | -0.18 | -0.14 | — | -0.18 | Resolved label typography field. |

### Button — destructive

destructive visual variant; dimensions shown across Size at Default state.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Button | – | – | – | – | – | – | – | – | Host button container |
| ↳ height | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | Height follows Size tokens; icon sizes stay square. |
| ↳ itemSpacing | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | Token gap between icon and label. |
| ↳ verticalPadding | spacing/padding/button-block (15) | spacing/button/padding-xs-block (6) | spacing/button/padding-sm-block (10) | spacing/padding/button-block (15) | — | — | — | — | Vertical inset scales with control size. |
| ↳ horizontalPadding | spacing/padding/button-inline (24) | spacing/button/padding-xs-inline (12) | spacing/button/padding-sm-inline (16) | spacing/button/padding-lg-inline (32) | — | — | — | — | Horizontal inset scales with control size. |
| ↳ cornerRadius | 100 | 100 | 100 | 100 | 9999 | 9999 | 9999 | 9999 | 100px produces a pill silhouette. |
| ↳ borderWidth | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | Variant controls visible stroke weight. |
| ↳ widthMode | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | Content width hugs its children. |
| textStyle | Button/default | Button/xs | Button/sm | Button/lg | Button/default | Button/xs | Button/sm | Button/lg | Label style varies with Size. |
| fontSize | 18 | 14 | 16 | 18 | 18 | 14 | 16 | 18 | Resolved label typography field. |
| fontFamily | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | Resolved label typography field. |
| fontWeight | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | Resolved label typography field. |
| lineHeight | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | Resolved label typography field. |
| letterSpacing | -0.18 | -0.14 | — | -0.18 | -0.18 | -0.14 | — | -0.18 | Resolved label typography field. |

### Button — link

link visual variant; dimensions shown across Size at Default state.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Button | – | – | – | – | – | – | – | – | Host button container |
| ↳ height | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | size/button/default (50) | size/button/xs (32) | size/button/sm (40) | size/button/lg (56) | Height follows Size tokens; icon sizes stay square. |
| ↳ itemSpacing | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | spacing/button/content-gap (8) | Token gap between icon and label. |
| ↳ verticalPadding | spacing/padding/button-block (15) | spacing/button/padding-xs-block (6) | spacing/button/padding-sm-block (10) | spacing/padding/button-block (15) | — | — | — | — | Vertical inset scales with control size. |
| ↳ horizontalPadding | spacing/padding/button-inline (24) | spacing/button/padding-xs-inline (12) | spacing/button/padding-sm-inline (16) | spacing/button/padding-lg-inline (32) | — | — | — | — | Horizontal inset scales with control size. |
| ↳ cornerRadius | 100 | 100 | 100 | 100 | 9999 | 9999 | 9999 | 9999 | 100px produces a pill silhouette. |
| ↳ borderWidth | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | Variant controls visible stroke weight. |
| ↳ widthMode | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | Content width hugs its children. |
| textStyle | Button/default | Button/xs | Button/sm | Button/lg | Button/default | Button/xs | Button/sm | Button/lg | Label style varies with Size. |
| fontSize | 18 | 14 | 16 | 18 | 18 | 14 | 16 | 18 | Resolved label typography field. |
| fontFamily | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | DM Sans | Resolved label typography field. |
| fontWeight | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | SemiBold | Resolved label typography field. |
| lineHeight | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | 18.899999618530273 | 19.600000381469727 | 18.399999618530273 | 18.899999618530273 | Resolved label typography field. |
| letterSpacing | -0.18 | -0.14 | — | -0.18 | -0.18 | -0.14 | — | -0.18 | Resolved label typography field. |

### Button icons — Leading icon

Button icon placement; internal glyph options belong to Button icons.

| Spec | Add | Arrow right | Loader | Notes |
|---|---|---|---|---|
| Leading icon | – | – | – | Placement varies by icon boolean. |
| ↳ iconSize | 24 × 24 | 24 × 24 | 24 × 24 | Standalone glyph dimensions. |
| ↳ fixedWidth | 14 | 14 | 18 | Measured in Button icons glyph variant walk. |
| ↳ fixedHeight | 14 | 12 | 18 | Measured in Button icons glyph variant walk. |
| ↳ itemSpacing | 0 | 0 | 0 | Measured in Button icons glyph variant walk. |
| ↳ counterAxisSpacing | 0 | 0 | 0 | Measured in Button icons glyph variant walk. |
| ↳ padding | 0 | 0 | 0 | Measured in Button icons glyph variant walk. |
| ↳ cornerRadius | 0 | 0 | 0 | Measured in Button icons glyph variant walk. |
| ↳ strokeWeight | 1.5 | 1.5 | 1.5 | Measured in Button icons glyph variant walk. |
| ↳ strokeAlign | center | center | center | Measured in Button icons glyph variant walk. |
| ↳ primaryAxisAlignItems | MIN | MIN | MIN | Measured in Button icons glyph variant walk. |
| ↳ counterAxisAlignItems | MIN | MIN | MIN | Measured in Button icons glyph variant walk. |
| ↳ widthMode | FIXED | FIXED | FIXED | Measured in Button icons glyph variant walk. |
| ↳ heightMode | FIXED | FIXED | FIXED | Measured in Button icons glyph variant walk. |
| ↳ clipsContent | true | true | true | Measured in Button icons glyph variant walk. |

### Button icons — Trailing icon

Button icon placement; internal glyph options belong to Button icons.

| Spec | Add | Arrow right | Loader | Notes |
|---|---|---|---|---|
| Trailing icon | – | – | – | Placement varies by icon boolean. |
| ↳ iconSize | 24 × 24 | 24 × 24 | 24 × 24 | Standalone glyph dimensions. |

### Button state changes

Default, hover, pressed, disabled, and loading configuration at default size.

| Spec | Default | Hover | Pressed | Disabled | Loading | Notes |
|---|---|---|---|---|---|---|
| Button | – | – | – | – | – | Root state geometry |
| ↳ height | size/button/default (50) | size/button/default (50) | size/button/default (50) | size/button/default (50) | size/button/default (50) | State-dependent root measurement. |
| ↳ borderWidth | 2 | 2 | 2 | 2 | 2 | State-dependent root measurement. |
| visibleIcons | — | — | — | — | Spinner | Loading replaces leading glyph and hides trailing icon. |

## Color

> Button icons is a constitutive child component. Its glyph strokes match the Label token in every sampled variant and state, so the parent table records the shared color on the Label row; glyph internals belong in the Button icons spec. The parent fills, borders, and label colors below are measured from its own colorWalk and are authoritative.

### default

| Element | Default | Disabled | Hover | Loading | Pressed | Notes |
|---|---|---|---|---|---|---|
| Container fill | none | none | color/action/hover-background · #191919 | none | color/action/pressed-background · #0E100F | Button container fill |
| Container stroke | none | color/action/disabled-border · #42433D | none | none | none | Button border or outline |
| Label | color/action/text · #FFFCE1 | color/text/disabled · #7C7C6F | color/action/text · #FFFCE1 | color/action/text · #FFFCE1 | color/action/text · #FFFCE1 | Visible label and matching glyph colors |

### outline

| Element | Default | Disabled | Hover | Loading | Pressed | Notes |
|---|---|---|---|---|---|---|
| Container fill | none | none | color/action/hover-background · #191919 | none | color/action/pressed-background · #0E100F | Button container fill |
| Container stroke | color/border/control · #FFFCE1 | color/action/disabled-border · #42433D | color/border/control · #FFFCE1 | color/border/control · #FFFCE1 | color/border/control · #FFFCE1 | Button border or outline |
| Label | color/action/text · #FFFCE1 | color/text/disabled · #7C7C6F | color/action/text · #FFFCE1 | color/action/text · #FFFCE1 | color/action/text · #FFFCE1 | Visible label and matching glyph colors |

### secondary

| Element | Default | Disabled | Hover | Loading | Pressed | Notes |
|---|---|---|---|---|---|---|
| Container fill | color/surface/nested-panel · #191919 | color/surface/nested-panel · #191919 | color/action/hover-background · #191919 | color/surface/nested-panel · #191919 | color/action/pressed-background · #0E100F | Button container fill |
| Container stroke | none | none | none | none | color/border/control · #FFFCE1 | Button border or outline |
| Label | color/action/text · #FFFCE1 | color/text/disabled · #7C7C6F | color/action/text · #FFFCE1 | color/action/text · #FFFCE1 | color/action/text · #FFFCE1 | Visible label and matching glyph colors |

### ghost

| Element | Default | Disabled | Hover | Loading | Pressed | Notes |
|---|---|---|---|---|---|---|
| Container fill | none | none | color/action/hover-background · #191919 | none | color/action/pressed-background · #0E100F | Button container fill |
| Container stroke | none | none | none | none | none | Button border or outline |
| Label | color/action/text · #FFFCE1 | color/text/disabled · #7C7C6F | color/action/text · #FFFCE1 | color/action/text · #FFFCE1 | color/action/text · #FFFCE1 | Visible label and matching glyph colors |

### destructive

| Element | Default | Disabled | Hover | Loading | Pressed | Notes |
|---|---|---|---|---|---|---|
| Container fill | none | none | color/action/hover-background · #191919 | none | color/action/pressed-background · #0E100F | Button container fill |
| Container stroke | color/action/destructive · #FF938A | color/action/disabled-border · #42433D | color/action/destructive · #FF938A | color/action/destructive · #FF938A | color/action/destructive · #FF938A | Button border or outline |
| Label | color/action/destructive · #FF938A | color/text/disabled · #7C7C6F | color/action/destructive · #FF938A | color/action/destructive · #FF938A | color/action/destructive · #FF938A | Visible label and matching glyph colors |

### link

| Element | Default | Disabled | Hover | Loading | Pressed | Notes |
|---|---|---|---|---|---|---|
| Container fill | none | none | none | none | none | Button container fill |
| Container stroke | none | none | none | none | none | Button border or outline |
| Label | color/action/text · #FFFCE1 | color/text/disabled · #7C7C6F | color/text/link-hover · #FFFCE1 | color/action/text · #FFFCE1 | color/action/text · #FFFCE1 | Visible label and matching glyph colors |

## Accessibility

- One focus stop in enabled and loading states: the Button. Its visible Label supplies the accessible name; leading/trailing glyphs merge as decorative artwork.
- On iOS, retain the button trait and use the visible label. On Android, preserve the native Button semantics and merged Text. On the web, use a native `<button>` whose text is the accessible name.
- Disabled is a component-level state with zero sequential keyboard focus stops; expose the native disabled state on each platform.
- During loading, keep the action label and expose a busy/loading state on the Button. Hide the spinner from the accessibility tree; the source does not establish a separate live announcement or whether interaction is disabled while loading.
- Do not reorder focus across states. Keep the label concise and do not duplicate it in an explicit accessibility name. Keep the icon and spinner merge consistent across iOS, Android, and web.

### resting

Default, Hover, and Pressed share the same accessibility semantics; hover and press are platform-managed transient states.

| Platform | Native implementation | Announcement | Role and focus | Nested content | Guardrails | Order |
|---|---|---|---|---|---|---|
| VoiceOver (iOS) | — | Button, button | .isButton | — | Do not: Do not repeat the visible label or announce decorative glyphs separately. | 1 |
| TalkBack (Android) | — | Button, button, double-tap to activate | Role.Button | — | Do not: Do not duplicate the visible label in contentDescription or expose glyphs as separate stops. | 1 |
| ARIA (Web) | — | Button, button | — | — | Do not: Do not add a duplicate aria-label or expose glyphs as separate controls. | 1 |

### isDisabled

Component-level disabled state: no sequential keyboard focus stop. Use each platform’s native disabled behavior.

No platform mappings were emitted.

### isLoading

The visible label remains and the spinner is decorative. The source does not establish a separate live region or a disabled interaction state.

| Platform | Native implementation | Announcement | Role and focus | Nested content | Guardrails | Order |
|---|---|---|---|---|---|---|
| VoiceOver (iOS) | — | Button, button, busy | .isButton | — | Do not: Do not announce the spinner as a standalone element or replace the action label with the icon name. | 1 |
| TalkBack (Android) | — | Button, button, loading, double-tap to activate | Role.Button | — | Do not: Do not announce the spinner as a standalone element or duplicate the label. | 1 |
| ARIA (Web) | — | Button, button, busy | — | — | Do not: Do not expose the spinner as a separate focus stop or replace the label with an icon name. | 1 |

## Known gaps

No known gaps.

## Evidence coverage

| Domain | Total | Emitted | Merged | Omitted | Unresolved |
|---|---|---|---|---|---|
| api | 11 | 9 | 2 | 0 | 0 |
| structure | 25721 | 25721 | 0 | 0 | 0 |
| color | 180 | 90 | 90 | 0 | 0 |
| voice | 7 | 1 | 6 | 0 | 0 |

---

Canonical JSON: `button.json`
