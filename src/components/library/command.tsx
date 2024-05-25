
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/search"
  
  export function CommandDemo() {
    return (
      <Command className="rounded-lg border shadow-md ">
        <CommandInput placeholder="Search Components.." />
        
      </Command>
    )
  }
  