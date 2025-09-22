'use client'

import * as React from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      case 'system':
        return <Monitor className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light mode'
      case 'dark':
        return 'Dark mode'
      case 'system':
        return 'System theme'
      default:
        return 'Toggle theme'
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={cycleTheme}
      className="h-8 w-8 p-0"
      title={getLabel()}
      aria-label={getLabel()}
    >
      {getIcon()}
      <span className="sr-only">{getLabel()}</span>
    </Button>
  )
}

export function ThemeToggleWithLabel() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={theme === 'light' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setTheme('light')}
        className="h-8 px-3"
      >
        <Sun className="h-4 w-4 mr-2" />
        Light
      </Button>
      <Button
        variant={theme === 'dark' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setTheme('dark')}
        className="h-8 px-3"
      >
        <Moon className="h-4 w-4 mr-2" />
        Dark
      </Button>
      <Button
        variant={theme === 'system' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setTheme('system')}
        className="h-8 px-3"
      >
        <Monitor className="h-4 w-4 mr-2" />
        System
      </Button>
    </div>
  )
}
