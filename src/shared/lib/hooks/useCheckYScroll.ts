import { useState, useEffect, RefObject } from "react"

export const useCheckYScroll = (
   scroll: number,
   containerRef: RefObject<HTMLElement> | undefined,
) => {
   const [hasScroll, setHasScrolled] = useState(false)

   useEffect(() => {
      const scrollContainer = containerRef?.current

      const handleScroll = () => {
         if (scrollContainer && scrollContainer.scrollTop > scroll) {
            setHasScrolled(true)
         } else {
            setHasScrolled(false)
         }
      }

      scrollContainer?.addEventListener("scroll", handleScroll)

      return () => {
         scrollContainer?.removeEventListener("scroll", handleScroll)
      }
   }, [containerRef])

   return hasScroll
}
