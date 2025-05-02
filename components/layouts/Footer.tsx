import Link from "next/link";
import { MicroscopeIcon, GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 relative z-10">
      <div className="glass border-t border-white/10 pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <MicroscopeIcon className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg">PCOS Detection</span>
              </Link>
              <p className="text-white/70 text-sm mb-6 max-w-md">
                A comparative analysis of Machine Learning and Deep Learning Models for 
                Polycystic Ovary Syndrome (PCOS) Detection.
                <br />
                <br />
                <br />
                <Link 
                  href="https://www.kaggle.com/datasets/prasoonkottarathil/polycystic-ovary-syndrome-pcos/data" 
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dataset
                </Link>
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/project-overview" className="text-white/70 hover:text-white transition-colors">
                    Project Overview
                  </Link>
                </li>
                <li>
                  <Link href="/results-and-visualizations" className="text-white/70 hover:text-white transition-colors">
                    Results & Visualizations
                  </Link>
                </li>
                <li>
                   
                  <Link href="/insights-discussion" className="text-white/70 hover:text-white transition-colors">
                    Insights & Discussion
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/references" className="text-white/70 hover:text-white transition-colors">
                    References
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
            <p>© 2025 PCOS Detection Research Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
