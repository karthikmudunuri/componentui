import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrump"

export function Navigation({
    title,
    page
    
}:{
    title:string,
    page:string
    
}) {
  return (
<div className="mt-4 -mb-8"> 
    <Breadcrumb >
      <BreadcrumbList>
        <BreadcrumbItem>
          
            <Link href="/">{title}</Link>
          
        </BreadcrumbItem>
        <BreadcrumbSeparator />
       
        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    </div>
  )
}
