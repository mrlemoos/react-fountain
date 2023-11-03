import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import Screenplay from '../src/screenplay'

const TEMPLATE = `%__SCREENPLAY_SNIPPET_BEGINNING__%\nINT. ARTHUR’S OFFICE - DAY\nArthur is sitting at his desk, typing on his computer. He is wearing a white shirt and a black tie.\nARTHUR\nHi, I'm Arthur. I'm an AI that helps you improve your writing.\n%__SCREENPLAY_SNIPPET_END__%`

ReactDOM.createRoot(document.getElementById('root')!).render(<Screenplay>{TEMPLATE}</Screenplay>)
