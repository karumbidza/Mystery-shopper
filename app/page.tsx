import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Mystery Shop Survey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional mystery shopping survey platform with geo-location features, 
            real-time analytics, and beautiful mobile-friendly interfaces.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/login">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/survey/demo">
              <Button variant="outline" size="lg">View Demo</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Geo-Location Surveys</CardTitle>
              <CardDescription>
                Surveys that activate only when users are within specified locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Perfect for mystery shopping and location-based data collection</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Real-time Analytics</CardTitle>
              <CardDescription>
                Monitor responses and completion rates in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Export data to CSV/Excel and make data-driven decisions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mobile First</CardTitle>
              <CardDescription>
                Beautiful, responsive surveys that work perfectly on any device
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Optimized for mobile users with seamless touch interactions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
