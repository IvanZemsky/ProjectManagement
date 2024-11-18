import { AppStorage } from "../lib"
import { Options } from "./types"

export const defaultOptions: Options = {
   breadcrumbs: true,
   tutorials: true,
   menu: 'left',
}

class OptionsStorage {
   constructor() {
      const options = AppStorage.get<Options>("options")
      if (!options) {
         AppStorage.set<Options>("options", defaultOptions)
      }
   }

   get = () => {
      return AppStorage.get<Options>('options')
   }

   set = (options: Options) => {
      return AppStorage.set<Options>('options', options)
   }

   setDefault = () => {
      return AppStorage.set<Options>('options', defaultOptions)
   }
}

export const optionsStorage = new OptionsStorage()