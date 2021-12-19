import Container from './container'
import GoBack from './go-back'

export default function Four00({
  message,
  title,
  link,
}: {
  link: string
  title: string
  message: string
}) {
  return (
    <Container className="py-60">
      <h1 className="font-bold text-7xl">{title}</h1>
      <p className="mt-2 text-xl font-bold light-font-color">{message}</p>
      <GoBack className="mt-8 link-font-color" link={link} />
    </Container>
  )
}
