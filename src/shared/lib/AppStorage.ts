type setCallback<T, P> = ((previousItems: T) => { set: T | null; returnValue: P })

export class AppStorage {
   public static get = <T, P = T>(
      key: string,
      callback?: (items: T) => P | null | undefined,
   ): P | null => {
      try {
         const data = localStorage.getItem(key) || null
         if (!data) return null

         const parsedData = JSON.parse(data)

         if (callback) {
            const result = callback(parsedData)
            if (result === null || result === undefined) {
               return null
            }
            return result
         } else {
            return parsedData
         }
      } catch (error) {
         throw new Error("Error while getting data")
      }
   }

   public static set<T, P = T>(
      key: string,
      setValue: P | setCallback<T, P>
   ): P | null {
      try {
         let response: P | null

         if (typeof setValue === "function") {
            const previousItems = localStorage.getItem(key) || null

            if (!previousItems) {
               return null
            }

            const { set, returnValue } = (
               setValue as setCallback<T, P>
            )(JSON.parse(previousItems))

            localStorage.setItem(key, JSON.stringify(set))
            response = returnValue
         } else {
            localStorage.setItem(key, JSON.stringify(setValue))
            response = AppStorage.get<P>(key)
         }

         return response
      } catch (error) {
         throw new Error("Error: couldn't set data")
      }
   }
}
