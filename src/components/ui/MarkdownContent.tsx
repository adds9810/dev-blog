import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { clsx } from 'clsx';
import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const MarkdownContent = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                className="rounded-xl text-sm my-4"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={clsx("bg-zinc-100 dark:bg-zinc-800 rounded px-1.5 py-0.5 text-sm font-medium", className)} {...props}>
                {children}
              </code>
            );
          },
           blockquote: ({ children }) => (
            <div className="border-l-4 border-blue-500 pl-4 py-1 my-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-r-lg italic">
              {children}
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export const Callout = ({ type = 'info', title, children }: { type?: 'info' | 'warning' | 'tip', title?: string, children: React.ReactNode }) => {
  const styles = {
    info: 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800',
    tip: 'bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-200 border-green-200 dark:border-green-800'
  };

  const icons = {
    info: <Info size={20} />,
    warning: <AlertTriangle size={20} />,
    tip: <Lightbulb size={20} />
  };

  return (
    <div className={clsx('p-4 rounded-xl border flex gap-3 my-6', styles[type])}>
      <div className="shrink-0 mt-0.5">{icons[type]}</div>
      <div>
        {title && <div className="font-bold mb-1">{title}</div>}
        <div className="text-sm leading-relaxed opacity-90">{children}</div>
      </div>
    </div>
  );
};
