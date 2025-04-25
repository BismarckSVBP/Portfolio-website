import { Code2, ExternalLink, Trophy } from "lucide-react";

const CodingProfiles = () => {
  return (
    <section
      id="coding-profiles"
      className="bg-gradient-to-b from-background/95 to-background py-0"
    >
      <div className="section-container">
        <h2 className="section-title">Coding Profiles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">My Competitive Journey</h3>
            <p className="text-muted-foreground mb-6">
              I'm passionate about solving algorithmic problems and sharpening my
              problem-solving skills. Check out my profiles on various coding platforms
              and feel free to connect!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Code2 className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">LeetCode</h4>
                  <a
                    href="https://leetcode.com/u/Abhay--Kumar"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    leetcode.com/Abhay--Kumar
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Trophy className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">CodeChef</h4>
                  <a
                    href="https://www.codechef.com/users/agent_x9"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    codechef.com/users/agent_x9
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <ExternalLink className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Codeforces</h4>
                  <a
                    href="https://codeforces.com/profile/abhaykumar85"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    codeforces.com/profile/abhaykumar85
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Stats & Highlights</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>⭐ 250+ problems solved on LeetCode</li>
              <li>🏅 2⭐ CodeChef rated coder</li>
              <li>🔥 Newbie on Codeforces</li>
              <li>💡 Focused on data structures, algorithms, and problem-solving</li>
              <li>🚀 Actively participating in contests & challenges</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
