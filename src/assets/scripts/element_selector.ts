export default function get_element<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (element == null) {
    throw new Error(`Element ${selector} not found!`)
  }

  return element
}
