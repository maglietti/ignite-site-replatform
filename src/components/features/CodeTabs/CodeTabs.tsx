/**
 * CodeTabs Component
 *
 * Tabbed interface for displaying code examples in multiple languages.
 * Commonly used to show the same functionality in Java, C#, SQL, XML, etc.
 *
 * Integrates with Docusaurus's built-in Prism syntax highlighting.
 *
 * @example
 * ```tsx
 * <CodeTabs
 *   examples={[
 *     { language: 'java', label: 'Java', code: 'System.out.println("Hello");' },
 *     { language: 'csharp', label: 'C#', code: 'Console.WriteLine("Hello");' }
 *   ]}
 *   defaultLanguage="java"
 * />
 * ```
 */

import React, { useState } from 'react';
import { CodeTabsProps } from '@site/src/types/components';
import CodeBlock from '@theme/CodeBlock';
import styles from './CodeTabs.module.css';

export default function CodeTabs({
  examples,
  defaultLanguage,
  className = '',
}: CodeTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(defaultLanguage || examples[0]?.language || '');

  if (!examples || examples.length === 0) {
    return <div className={styles.error}>No code examples provided</div>;
  }

  const activeExample = examples.find((ex) => ex.language === activeTab) || examples[0];

  const handleKeyDown = (event: React.KeyboardEvent, language: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveTab(language);
    }
  };

  return (
    <div className={`${styles.codeTabs} ${className}`}>
      <div className={styles.tabList} role="tablist" aria-label="Code language tabs">
        {examples.map((example) => (
          <button
            key={example.language}
            type="button"
            role="tab"
            aria-selected={activeTab === example.language}
            aria-controls={`panel-${example.language}`}
            id={`tab-${example.language}`}
            tabIndex={activeTab === example.language ? 0 : -1}
            className={`${styles.tab} ${
              activeTab === example.language ? styles.tabActive : ''
            }`}
            onClick={() => setActiveTab(example.language)}
            onKeyDown={(e) => handleKeyDown(e, example.language)}
          >
            {example.label}
          </button>
        ))}
      </div>
      <div
        className={styles.tabPanel}
        role="tabpanel"
        id={`panel-${activeExample.language}`}
        aria-labelledby={`tab-${activeExample.language}`}
      >
        <CodeBlock language={activeExample.language}>{activeExample.code}</CodeBlock>
      </div>
    </div>
  );
}
