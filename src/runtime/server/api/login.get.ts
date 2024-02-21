import { defineEventHandler, sendRedirect } from 'h3'
import { getKindeClient } from '../utils/client'

export default defineEventHandler(async event => {
  const { org_code, postLoginRedirectURL } = getQuery(event)
  const loginURL = await getKindeClient().login(event.context.kinde.sessionManager,
  {
    org_code: org_code?.toString(),
    authUrlParams: query,
    post_login_redirect_url: postLoginRedirectURL?.toString()
  })
  await sendRedirect(event, loginURL.href)
})
