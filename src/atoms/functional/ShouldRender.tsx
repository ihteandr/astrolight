import React, { useCallback } from 'react'

type Props = {
  should: boolean | (() => boolean)
  children: React.ReactNode | React.ReactNode[] | (() => React.ReactNode | React.ReactNode[])
}

const ShouldRender = ({ should, children }: Props) => {
  const condition = typeof should === 'function' ? should() : !!should

  const renderChild = useCallback(() => {
    return typeof children === 'function' ? children() : children
  }, [children, should])

  return <>{condition ? renderChild() : null}</>
}

export default ShouldRender
