/**
 * DownloadWidget Component
 *
 * Complex download interface for Apache Ignite releases.
 * Supports version selection, binary/source tabs, and download options.
 *
 * @example
 * ```tsx
 * <DownloadWidget
 *   options={[
 *     {
 *       version: '2.14.0',
 *       type: 'binary',
 *       size: '256 MB',
 *       date: '2022-09-28',
 *       downloadUrl: 'https://...'
 *     }
 *   ]}
 *   releaseNotesUrl="https://ignite.apache.org/releases/"
 * />
 * ```
 */

import React, { useState } from 'react';
import { DownloadWidgetProps, DownloadOption } from '@site/src/types/components';
import styles from './DownloadWidget.module.css';

type DownloadType = 'binary' | 'source';

export default function DownloadWidget({
  options,
  releaseNotesUrl,
  className = '',
}: DownloadWidgetProps): JSX.Element {
  const [selectedType, setSelectedType] = useState<DownloadType>('binary');

  if (!options || options.length === 0) {
    return <div className={styles.error}>No download options available</div>;
  }

  const versions = Array.from(new Set(options.map((opt) => opt.version)));
  const [selectedVersion, setSelectedVersion] = useState(versions[0]);

  const filteredOptions = options.filter(
    (opt) => opt.version === selectedVersion && opt.type === selectedType
  );

  const currentOption = filteredOptions[0];

  return (
    <div className={`${styles.downloadWidget} ${className}`}>
      <div className={styles.header}>
        <h2 className={`${styles.title} h4`}>Download Apache Ignite</h2>
        {releaseNotesUrl && (
          <a href={releaseNotesUrl} className={styles.releaseNotes}>
            Release Notes
          </a>
        )}
      </div>

      {/* Version Selector */}
      <div className={styles.versionSelect}>
        <label htmlFor="version-select" className={styles.label}>
          Select Version:
        </label>
        <select
          id="version-select"
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
          className={styles.select}
        >
          {versions.map((version) => (
            <option key={version} value={version}>
              {version} {version === versions[0] && '(Latest)'}
            </option>
          ))}
        </select>
      </div>

      {/* Type Tabs */}
      <div className={styles.typeTabs} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={selectedType === 'binary'}
          className={`${styles.typeTab} ${selectedType === 'binary' ? styles.typeTabActive : ''}`}
          onClick={() => setSelectedType('binary')}
        >
          Binary Release
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedType === 'source'}
          className={`${styles.typeTab} ${selectedType === 'source' ? styles.typeTabActive : ''}`}
          onClick={() => setSelectedType('source')}
        >
          Source Release
        </button>
      </div>

      {/* Download Info */}
      {currentOption ? (
        <div className={styles.downloadInfo}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Version:</span>
            <span className={styles.infoValue}>{currentOption.version}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Size:</span>
            <span className={styles.infoValue}>{currentOption.size}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Release Date:</span>
            <span className={styles.infoValue}>{currentOption.date}</span>
          </div>
          <div className={styles.downloadAction}>
            <a
              href={currentOption.downloadUrl}
              className={`button ${styles.downloadButton}`}
              download
            >
              Download {selectedType === 'binary' ? 'Binary' : 'Source'}
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.noOption}>
          No {selectedType} release available for version {selectedVersion}
        </div>
      )}

      {/* Verification Instructions */}
      <div className={styles.verification}>
        <h3 className={`${styles.verificationTitle} h5`}>Verification</h3>
        <p className={styles.verificationText}>
          It is essential that you verify the integrity of downloaded files using PGP or SHA
          signatures.
        </p>
        <div className={styles.verificationLinks}>
          <a href="https://www.apache.org/dyn/closer.cgi" className={styles.verificationLink}>
            Download from mirror
          </a>
          <a
            href="https://www.apache.org/info/verification.html"
            className={styles.verificationLink}
          >
            How to verify
          </a>
        </div>
      </div>
    </div>
  );
}
