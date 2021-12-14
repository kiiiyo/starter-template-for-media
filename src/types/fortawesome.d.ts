export type IconSize =
  | 'xs'
  | 'lg'
  | 'sm'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x'

export type IconPrefix = 'fas' | 'fab'

export type IconName = 'times' | 'bars' | 'chevron-right' | 'chevron-left'

export type IconStyle = {
  prefix: IconPrefix
  name: IconName
}
