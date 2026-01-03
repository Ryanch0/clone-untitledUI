import {
  Root,
  Separator,
  ToggleGroup,
  ToggleItem
} from '@radix-ui/react-toolbar'
import {
  Bold,
  Italic,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignStart,
  Underline
} from 'lucide-react'
import { cn } from '@/styles/utils.ts'
const Toolbar = () => {
  return (
    <Root
      className={cn(
        'text-muted p-2.5 border border-secondary rounded-lg max-w-2xs w-fit',
        'flex gap-3.5 toolbar-shadow'
      )}
    >
      <ToggleGroup type={'single'} className={cn('flex gap-3.5')}>
        <ToggleItem value={'bold'}>
          <Bold size={20} />
        </ToggleItem>
        <ToggleItem value={'italic'}>
          <Italic size={20} />
        </ToggleItem>
        <ToggleItem value={'underline'}>
          <Underline size={20} />
        </ToggleItem>
      </ToggleGroup>

      <ToggleGroup type={'single'} className={cn('flex gap-3.5')}>
        <Separator className={'h-5 border-primary border-l w-0'} />
        <ToggleItem value={'colors'} className={'flex'}>
          <div className={cn('bg-black size-4 rounded-full')}></div>
        </ToggleItem>
      </ToggleGroup>

      <ToggleGroup type={'single'} className={cn('flex gap-3.5')}>
        <Separator className={'h-5 border-primary border-l w-0'} />
        <ToggleItem value={'align-start'}>
          <TextAlignStart size={20} />
        </ToggleItem>
        <ToggleItem value={'align-center'}>
          <TextAlignCenter size={20} />
        </ToggleItem>
        <ToggleItem value={'align-end'}>
          <TextAlignEnd size={20} />
        </ToggleItem>
      </ToggleGroup>
    </Root>
  )
}

export default Toolbar
