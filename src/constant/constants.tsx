import { Clock } from 'lucide-react'

export const TAB_OPTIONS = [
  { label: 'My details', value: 'my-details' },
  { label: 'Profile', value: 'profile' },
  { label: 'Password', value: 'password' },
  { label: 'Team', value: 'team' },
  { label: 'Plan', value: 'plan' },
  { label: 'Billing', value: 'billing' },
  { label: 'Email', value: 'email' },
  { label: 'Notifications', value: 'notifications' },
  { label: 'Integrations', value: 'integrations' },
  { label: 'API', value: 'api' }
]

export const COUNTRY_OPTIONS = [
  {
    label: (
      <div className={'flex gap-2'}>
        <img
          src="https://hatscripts.github.io/circle-flags/flags/au.svg"
          alt="australia"
          width="20"
          height="20"
          className="rounded-full"
        />
        <span>Australia</span>
      </div>
    ),
    value: 'australia'
  }
]

export const TIMEZONE_OPTIONS = [
  {
    label: (
      <div className={'flex gap-2 items-center'}>
        <Clock size={20} className={'text-muted'} />
        <p className={'text-tertiary'}>
          <span className={'text-primary font-medium'}>PST</span> UTC-08:00
        </p>
      </div>
    ),
    value: 'pst-utc-08:00'
  }
]

export const DUMMY_PROFILE_IMAGE =
  'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
