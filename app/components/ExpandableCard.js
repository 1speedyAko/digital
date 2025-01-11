'use client';
import { cn } from '@/lib/utils';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function ExpandableCard({
  height = '8rem',
  className = '',
  children,
  wide = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      className={cn(
        ' dark:bg-zinc-950 dark:from-zinc-950 from-white w-full  px-4 pt-8 pb-3 rounded-lg shadow',
        className
      )}
    >
      <div className="relative overflow-hidden bg-inherit dark:bg-inherit">
        <div
          ref={contentRef}
          id="expandable-content"
          className="transition-all duration-300 ease-in-out"
          style={{ height: isExpanded ? `${contentHeight}px` : height }}
        >
          {children}
        </div>
        <div
          data-expanded={isExpanded}
          className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-inherit dark:from-inherit/50 to-transparent pointer-events-none data-[expanded=true]:opacity-0 transition-opacity duration-300 ease-in-out"
          aria-hidden={isExpanded ? 'true' : 'false'}
        />
        <div
          className={cn(
            'mx-auto bg-inherit dark:bg-inherit',
            wide ? 'w-full' : 'w-fit',
            isExpanded ? 'pt-2' : 'absolute bottom-4 inset-x-0'
          )}
        >
          <Button
            variant="outline"
            className="w-full bg-inherit dark:bg-inherit rounded-lg"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="expandable-content"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </Button>
        </div>
      </div>
    </div>
  );
}
