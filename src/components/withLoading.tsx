import { ComponentType } from 'react'
import { Spinner } from 'react-bootstrap'

export default function withLoading<P>(Wrapped: ComponentType<P>) {
  return function WithLoadingComponent(props: P & { loading: boolean }) {
    const { loading, ...rest } = props as any
    if (loading) {
      return (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )
    }
    return <Wrapped {...(rest as P)} />
  }
}


