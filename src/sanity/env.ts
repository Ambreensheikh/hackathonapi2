export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-20'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skdcQmZxJbDVNeGVJxgpE405TbOpGrvJxbr8gFGPuE5rmxF6KpzlYAvj6bUkay3e8LCJv21tnUazfqMgJPaT4WmFztHiJ0l8mm8sPOYQbTcU55p5GUjLNf4JYXiTlBisaDsZPcyAQSe9NTJwHVRssF1XiDRkXN4L2JTAqLdDme5bdXI6hk3f",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
