import type { Devfile } from 'customTypes'
import type { ForwardedRef } from 'react'

import { forwardRef } from 'react'
import { Badge, Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  devfile: Devfile
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DevfileTile = ({ devfile, onClick }: Props, ref: ForwardedRef<HTMLElement>): React.ReactElement => {
  const numTags = 3

  return (
    <Card className="h-52 m-2" onClick={onClick} isHoverable>
      <CardTitle>{devfile.displayName}</CardTitle>
      <CardBody className="h-1 overflow-hidden">{devfile.description}</CardBody>
      <CardFooter>
        {devfile.tags?.slice(0, numTags).map((tag: string, index) => {
          return <Badge className="m-0.5" key={index}>{tag}</Badge>
        })}
        { numTags < devfile.tags?.length && <Badge className="m-0.5" isRead>{devfile.tags?.length - numTags} more</Badge> }
      </CardFooter>
    </Card>
  )
}

export default forwardRef(DevfileTile)
