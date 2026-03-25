const InfrastructureArch: React.FC = () => {
  const manualPath = 'M 70 150 C 140 128, 210 178, 285 150 C 330 134, 365 136, 405 150';
  const effitoPath = 'M 70 290 C 180 290, 280 290, 390 290 C 500 290, 590 290, 670 290';

  return (
    <svg
      viewBox="0 0 740 420"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Comparison between fragmented manual care home operations and Effito's simplified infrastructure"
    >
      <defs>
        <pattern id="simpleGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke={C.grid} strokeWidth="0.6" />
        </pattern>

        <linearGradient id="manualStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D6D3D1" />
          <stop offset="100%" stopColor="#C8C4BC" />
        </linearGradient>

        <linearGradient id="effitoStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>

        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="740" height="420" fill={C.bg} />
      <rect width="740" height="420" fill="url(#simpleGrid)" />

      {/* Header */}
      <text
        x="28"
        y="28"
        fontSize="9"
        fill={C.mid}
        fontFamily="'Helvetica Neue', sans-serif"
        letterSpacing="3"
        fontWeight="700"
      >
        THE OPERATING DIFFERENCE
      </text>

      <text
        x="712"
        y="28"
        fontSize="9"
        fill={C.accent}
        fontFamily="'Helvetica Neue', sans-serif"
        letterSpacing="2.5"
        fontWeight="700"
        textAnchor="end"
      >
        BLUEPRINT V3.1
      </text>

      {/* Top lane: old way */}
      <g>
        <text
          x="70"
          y="90"
          fontSize="10"
          fill={C.mid}
          fontFamily="'Helvetica Neue', sans-serif"
          letterSpacing="2.5"
          fontWeight="700"
        >
          OLD WAY
        </text>

        <text
          x="670"
          y="90"
          fontSize="10"
          fill={C.danger}
          fontFamily="'Helvetica Neue', sans-serif"
          letterSpacing="2"
          fontWeight="700"
          textAnchor="end"
          opacity="0.75"
        >
          SLOW • FRAGMENTED • LEAKY
        </text>

        <motion.path
          d={manualPath}
          fill="none"
          stroke="url(#manualStroke)"
          strokeWidth="2.2"
          strokeDasharray="7 7"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        <motion.circle
          r="4"
          fill={C.dim}
          filter="url(#softGlow)"
          animate={{ offsetDistance: ['0%', '100%'] }}
          transition={{ duration: 4.5, ease: 'linear', repeat: Infinity }}
          style={{
            offsetPath: `path("${manualPath}")`,
            offsetRotate: '0deg',
          }}
        />

        {[
          { x: 70, label: 'Enquiry' },
          { x: 195, label: 'Inbox' },
          { x: 320, label: 'Manager' },
          { x: 405, label: 'Lost lead' },
        ].map((node, i) => (
          <g key={node.label}>
            <circle cx={node.x} cy={150} r="8" fill={C.bg} stroke={C.dim} strokeWidth="1.4" />
            <circle cx={node.x} cy={150} r="2.5" fill={i === 3 ? C.danger : C.dim} />
            <text
              x={node.x}
              y={176}
              fontSize="10"
              fill={i === 3 ? C.danger : C.mid}
              textAnchor="middle"
              fontFamily="'Helvetica Neue', sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}

        <text
          x="195"
          y="128"
          fontSize="9"
          fill={C.mid}
          textAnchor="middle"
          fontFamily="'Helvetica Neue', sans-serif"
        >
          unread
        </text>

        <text
          x="320"
          y="128"
          fontSize="9"
          fill={C.danger}
          textAnchor="middle"
          fontFamily="'Helvetica Neue', sans-serif"
        >
          delay
        </text>

        <text
          x="238"
          y="212"
          fontSize="9"
          fill={C.mid}
          textAnchor="middle"
          fontFamily="'Helvetica Neue', sans-serif"
          letterSpacing="2"
        >
          MANUAL VOLATILITY
        </text>
      </g>

      {/* Divider */}
      <line x1="28" y1="238" x2="712" y2="238" stroke={C.grid} strokeWidth="1.2" />

      {/* Bottom lane: Effito */}
      <g>
        <text
          x="70"
          y="268"
          fontSize="10"
          fill={C.accent}
          fontFamily="'Helvetica Neue', sans-serif"
          letterSpacing="2.5"
          fontWeight="700"
        >
          WITH EFFITO
        </text>

        <text
          x="670"
          y="268"
          fontSize="10"
          fill={C.emerald}
          fontFamily="'Helvetica Neue', sans-serif"
          letterSpacing="2"
          fontWeight="700"
          textAnchor="end"
        >
          FAST • CONTROLLED • CONSISTENT
        </text>

        <line
          x1="70"
          y1="290"
          x2="670"
          y2="290"
          stroke="url(#effitoStroke)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <motion.rect
          x="70"
          y="276"
          width="90"
          height="28"
          rx="14"
          fill="rgba(15,23,42,0.06)"
          animate={{ x: [70, 580, 70] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {[0, 1.1, 2.2].map((delay, i) => (
          <motion.circle
            key={i}
            r="5"
            fill={C.emerald}
            filter="url(#softGlow)"
            animate={{ offsetDistance: ['0%', '100%'] }}
            transition={{ duration: 3.2, ease: 'linear', repeat: Infinity, delay }}
            style={{
              offsetPath: `path("${effitoPath}")`,
              offsetRotate: '0deg',
            }}
          />
        ))}

        {[
          { x: 70, label: 'Enquiry' },
          { x: 250, label: 'Effito' },
          { x: 470, label: 'Qualified' },
          { x: 670, label: 'Booked' },
        ].map((node, i) => (
          <g key={node.label}>
            <motion.circle
              cx={node.x}
              cy={290}
              r="8"
              fill={C.accent}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
            />
            <motion.circle
              cx={node.x}
              cy={290}
              r="18"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1"
              animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.15, 1.45] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
            />
            <text
              x={node.x}
              y={318}
              fontSize="10"
              fill={C.accent}
              textAnchor="middle"
              fontFamily="'Helvetica Neue', sans-serif"
              fontWeight={i === 1 ? '700' : '500'}
            >
              {node.label}
            </text>
          </g>
        ))}

        <text
          x="370"
          y="356"
          fontSize="18"
          fill={C.ink}
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontStyle="italic"
        >
          One clean operating line.
        </text>

        <text
          x="370"
          y="376"
          fontSize="9"
          fill={C.mid}
          textAnchor="middle"
          fontFamily="'Helvetica Neue', sans-serif"
          letterSpacing="2"
          fontWeight="700"
        >
          LESS CHASING • LESS DELAY • LESS LEAKAGE
        </text>
      </g>
    </svg>
  );
};
