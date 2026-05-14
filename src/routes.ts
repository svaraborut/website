import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [index('routes/index.tsx'), route('og/:name', 'routes/$ogi.tsx')] satisfies RouteConfig
