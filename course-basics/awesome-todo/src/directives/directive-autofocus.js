// Importing platform only for the autofocus, as it will be used for iOS detection
import { Platform } from 'quasar'

export const autofocus =  {
  inserted(el, binding) {
    let input = el.querySelector('.q-field__native')
    let delay = 0

    if (Platform.is.cordova) {
      delay = 500
      if (binding.value) {
        delay = binding.value.delayCordova
      }
    }

    setTimeout(() => {
      input.focus()
    }, delay)
  }
}