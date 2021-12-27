import { MetaFunction } from 'remix'

import { Container } from '~/components'

export const meta: MetaFunction = () => {
  return {
    title: 'About',
  }
}

export default function About() {
  return (
    <div className="py-16">
      <Container>
        <img
          src="/images/profile.jpg"
          width={200}
          height={200}
          className="mx-auto mb-8 rounded-full"
          alt="Muthukumar"
        />
        <div className="flex flex-col max-w-3xl mx-auto space-y-4 text-base md:text-lg">
          <p>
            Hey, I&apos;m Muthukumar. I&apos;m a full stack developer. I likes to write code. I
            listen to music. And I occasionally write on React, Javascript and other stuff. Loves to
            read books.
          </p>
          <p>
            Currently I&apos;m in love with building website with Remix. And I also likes to try out
            new technologies and build stuff with it for practice.
          </p>
          <p>
            <a
              href="https://twitter.com/RobertGreene"
              target="_blank"
              rel="noreferrer"
              className="link-font-color"
            >
              Robert Greene
            </a>
            ,{' '}
            <a
              href="https://twitter.com/RyanHoliday"
              target="_blank"
              rel="noreferrer"
              className="link-font-color"
            >
              Ryan Holiday
            </a>{' '}
            and{' '}
            <a
              href="https://twitter.com/IAmMarkManson"
              target="_blank"
              rel="noreferrer"
              className="link-font-color"
            >
              Mark Manson
            </a>{' '}
            are my favorites authors in the category of Books.
          </p>
          <p>At present, I&apos;m unemployed and figuring out what to do with my life.</p>
        </div>
      </Container>
    </div>
  )
}
