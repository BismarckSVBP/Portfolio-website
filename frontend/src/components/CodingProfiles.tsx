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
          {/* Left Column */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">My Competitive Journey</h3>
            <p className="text-muted-foreground mb-6">
              I'm passionate about solving algorithmic problems and constantly improving my
              competitive programming skills. Here are my active profiles where I
              regularly participate and practice.
            </p>

            <div className="space-y-6">
              {/* LeetCode */}
              <div className="flex items-start">
                <Code2 className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">LeetCode</h4>
                  <a
                    href="https://leetcode.com/u/Abhay--Kumar/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    leetcode.com/u/Abhay--Kumar
                  </a>
                </div>
              </div>

              {/* CodeChef */}
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

              {/* Codeforces */}
              <div className="flex items-start">
                <ExternalLink className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Codeforces</h4>
                  <a
                    href="https://codeforces.com/profile/abhaykumar85?mobile=false"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    codeforces.com/profile/abhaykumar85
                  </a>
                </div>
              </div>

              {/* Codolio */}
              <div className="flex items-start">
                <ExternalLink className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Codolio</h4>
                  <a
                    href="https://codolio.com/profile/Abhay--Kumar"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    codolio.com/profile/Abhay--Kumar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-card p-6 rounded-lg border border-border animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Stats & Highlights</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>⭐ 480+ problems solved on LeetCode</li>
              <li>🏅 CodeChef: ★★★ (Max Rating: 1670)</li>
              <li>🔥 Codeforces: Pupil (Max Rating: 1268)</li>
              <li>🎯 TCS CodeVita Season 13: R2 Rank 1763 ❤️‍🔥</li>
              <li>🏆 Secured 2nd Rank in a GitHub Event</li>
              <li>💡 Strong in DSA, competitive programming & problem-solving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
