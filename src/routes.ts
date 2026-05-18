import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
    // Pages
    index('routes/index.tsx'),
    route('fractional', 'routes/fractional.tsx'),
    route('projects', 'routes/projects.tsx'),
    // Other
    route('og/:name', 'routes/$ogi.tsx'),
    route('404', 'routes/404.tsx')
] satisfies RouteConfig
