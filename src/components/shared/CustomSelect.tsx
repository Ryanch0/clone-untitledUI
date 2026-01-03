import * as React from 'react'
import {
  Content,
  Group,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Trigger,
  Value,
  Viewport
} from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import type { ForwardedRef, ReactNode } from 'react'
import { cn } from '@/styles/utils.ts'

type SelectItemProps = {
  value: string
  label: ReactNode
}

type Props = {
  options: SelectItemProps[]
  placeholder?: string
  className?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  label?: ReactNode
}

const CustomSelect = ({
  options,
  value,
  onValueChange,
  defaultValue = '',
  placeholder = 'select...',
  label
}: Props) => (
  <div
    className={'flex flex-col gap-1.5 md:flex-row md:items-center input-shadow'}
  >
    {label && (
      <label className={cn('typo-label text-secondary md:w-1/3 md:max-w-xs')}>
        {label}
      </label>
    )}
    <Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <Trigger className={cn('w-full py-2.5 px-3.5 input-base md:max-w-lg')}>
        <div className={cn('relative flex justify-between items-center')}>
          <Value placeholder={placeholder} />
          <Icon
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 text-muted'
            )}
          >
            <ChevronDownIcon size={20} />
          </Icon>
        </div>
      </Trigger>
      <Portal>
        <Content
          position="popper"
          className={cn(
            'w-[var(--radix-select-trigger-width)] bg-secondary rounded-md shadow-lg z-50'
          )}
        >
          <ScrollUpButton>
            <ChevronUpIcon />
          </ScrollUpButton>
          <Viewport>
            <Group className={cn('bg-secondary space-y-1.5 py-2')}>
              {options.map(({ label, value }) => (
                <SelectItem value={value} label={label} key={value} />
              ))}
            </Group>
          </Viewport>
          <ScrollDownButton>
            <ChevronDownIcon />
          </ScrollDownButton>
        </Content>
      </Portal>
    </Root>
  </div>
)

const SelectItem = React.forwardRef(
  (
    { value, label }: SelectItemProps,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Item
        ref={forwardedRef}
        value={value}
        className={cn(
          'flex items-center gap-1 outline-none cursor-pointer hover:opacity-50 py-1 px-2'
        )}
      >
        <ItemIndicator>
          <CheckIcon size={16} />
        </ItemIndicator>
        <ItemText>{label}</ItemText>
      </Item>
    )
  }
)

export default CustomSelect
