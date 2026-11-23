import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'
export type ButtonSize = 'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const baseClasses =
  'inline-flex shrink-0 items-center justify-center gap-button-content whitespace-nowrap rounded-button font-dm-sans font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action-focus-ring disabled:pointer-events-none disabled:border-action-disabled-border disabled:text-disabled [&_svg]:pointer-events-none [&_svg]:shrink-0'

const variantClasses: Record<ButtonVariant, string> = {
  default: 'button-default',
  outline: 'border border-control-border bg-action-background text-action-text hover:bg-action-hover-background active:bg-action-pressed-background',
  secondary: 'border border-subtle bg-panel text-primary hover:border-control-border active:bg-action-pressed-background',
  ghost: 'border border-transparent bg-action-background text-primary hover:bg-action-hover-background active:bg-action-pressed-background',
  destructive: 'border border-danger bg-action-background text-danger hover:bg-action-hover-background active:bg-action-pressed-background',
  link: 'h-auto border border-transparent bg-action-background p-0 text-link underline-offset-4 hover:text-link-hover hover:underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'h-button-xs px-button-xs-inline py-button-xs-block text-button-xs',
  sm: 'h-button-sm px-button-sm-inline py-button-sm-block text-button-sm',
  default: 'h-button-default px-button-inline py-button-block text-button-default',
  lg: 'h-button-lg px-button-lg-inline py-button-block text-button-lg',
  icon: 'size-button-default rounded-icon-button p-icon-button [&_svg]:size-button-icon-20',
  'icon-xs': 'size-button-xs rounded-icon-button p-icon-button [&_svg]:size-button-icon-16',
  'icon-sm': 'size-button-sm rounded-icon-button p-icon-button [&_svg]:size-button-icon-20',
  'icon-lg': 'size-button-lg rounded-icon-button p-icon-button [&_svg]:size-button-icon-24',
}

export function buttonVariants({
  variant = 'default',
  size = 'default',
  className = '',
}: Pick<ButtonProps, 'variant' | 'size' | 'className'> = {}) {
  return [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ')
}

export function Button({
  variant = 'default',
  size = 'default',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return <button type={type} className={buttonVariants({ variant, size, className })} {...props} />
}
