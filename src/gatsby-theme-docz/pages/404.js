import React from 'react'
import { Link } from 'docz'

import { Button } from '../../../../packages/Button/index'

const NotFoundPage = () => (
  <div>
    <h1>Oups 🙈</h1>
    <p>You just hit a route that doesn‘t exist... 👀</p>
    <Button as={Link} to="/">
      Back to home
    </Button>
  </div>
)

export default NotFoundPage
