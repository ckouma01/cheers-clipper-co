import { useState } from "react";
import { Github, ExternalLink, RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Update this if your repo URL changes.
const GITHUB_REPO_URL = "https://github.com/";

const GitHubSyncButton = () => {
  const [open, setOpen] = useState(false);
  const [syncing, setSyncing] = useState(false);

  const handleSync = () => {
    setSyncing(true);
    // Open the GitHub repo in a new tab so the user can verify the latest commit.
    window.open(GITHUB_REPO_URL, "_blank", "noopener,noreferrer");
    setTimeout(() => setSyncing(false), 1200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs text-primary-foreground/70 hover:text-gold transition-colors font-light"
          aria-label="Sync to GitHub"
        >
          <Github className="w-3.5 h-3.5" />
          Sync to GitHub
        </button>
      </DialogTrigger>
      <DialogContent className="bg-primary border-gold/30 text-primary-foreground">
        <DialogHeader>
          <DialogTitle className="text-gold flex items-center gap-2">
            <Github className="w-5 h-5" />
            Sync to GitHub
          </DialogTitle>
          <DialogDescription className="text-primary-foreground/70 font-light">
            Lovable automatically pushes every change to GitHub. If your repo
            looks out of date, use this to jump straight to it and verify the
            latest commit, or reconnect from the Lovable editor's GitHub menu.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 text-sm font-light">
          <p className="text-primary-foreground/80">
            <span className="text-gold font-semibold">Tip:</span> If commits are
            still missing, open the <span className="text-gold">+</span> menu in
            the Lovable editor → <span className="text-gold">GitHub</span> →
            disconnect and reconnect to force a fresh sync.
          </p>
        </div>

        <DialogFooter className="gap-2 sm:gap-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="border-gold/40 text-gold hover:bg-gold/10 hover:text-gold"
          >
            Close
          </Button>
          <Button
            onClick={handleSync}
            disabled={syncing}
            className="bg-gold text-primary hover:bg-gold/90"
          >
            {syncing ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <ExternalLink className="w-4 h-4 mr-2" />
            )}
            {syncing ? "Opening…" : "Open GitHub repo"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GitHubSyncButton;
