import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
function NewsCard({ article }) {
    return (
        <div>
            <Link href={article.link} target='_blank'>
                <Card className="mt-5">
                    <CardHeader>
                        <CardDescription>{article.source}</CardDescription>
                        <CardTitle className="text-red-600">{article.title}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                        <p>{article.time}</p>
                    </CardFooter>
                </Card>
            </Link>
        </div>
    )
}

export default NewsCard