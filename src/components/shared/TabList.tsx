import { Tabs, TabsTrigger, TabsList } from '@radix-ui/react-tabs'
import { cn } from '@/styles/utils.ts'

type Props = {
  options: { label: string; value: string }[]
  defaultValue?: string
  rootClassname?: string
  triggerClassname?: string
}

const TabList = ({
  options,
  defaultValue,
  rootClassname,
  triggerClassname
}: Props) => {
  const onValueChange = (value: string) => {
    console.log(value)
  }
  const tabsTriggerClassname = cn(
    'py-2 px-3 typo-tab text-muted rounded-lg cursor-pointer',
    'data-[state=active]:bg-primary data-[state=active]:text-secondary data-[state=active]:outline-primary data-[state=active]:border-none',
    triggerClassname
  )
  return (
    <Tabs
      defaultValue={defaultValue ?? options[0].value}
      onValueChange={onValueChange}
      className={rootClassname}
    >
      <TabsList
        className={cn('bg-secondary border border-secondary rounded-lg ')}
      >
        {options.map(({ label, value }) => (
          <TabsTrigger
            key={value}
            value={value}
            className={tabsTriggerClassname}
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default TabList
