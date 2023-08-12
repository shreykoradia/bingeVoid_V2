'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics';

export const Analytics = (props) => <VercelAnalytics {...props} />;
