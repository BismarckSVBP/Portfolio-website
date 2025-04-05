
import { Calendar } from 'lucide-react';

// Mock data - this would come from the backend in the real implementation
const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Node.js Microservices',
    summary: 'Learn how to design and implement a microservices architecture with Node.js that can scale efficiently.',
    date: '2024-03-15',
    tags: ['Node.js', 'Microservices', 'Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Advanced MongoDB Aggregation Pipelines',
    summary: 'Deep dive into MongoDB\'s powerful aggregation framework to transform and analyze your data efficiently.',
    date: '2024-02-28',
    tags: ['MongoDB', 'Database', 'Performance'],
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Securing Express.js APIs with JWT Authentication',
    summary: 'A comprehensive guide to implementing secure JWT-based authentication in your Express.js applications.',
    date: '2024-02-10',
    tags: ['Security', 'JWT', 'Express'],
    imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&auto=format&fit=crop'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="bg-background py-8 md:py-12">
      <div className="section-container">
        <h2 className="section-title">Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{post.summary}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-xs rounded-full text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href={`#blog/${post.id}`} className="text-primary hover:text-primary/80 transition-colors font-medium">
                  Read Article →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#blog/all"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/90 transition-colors inline-block"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
