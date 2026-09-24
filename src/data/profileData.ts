export interface Publication {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  authors: string[];
  venue: string;
  year: number;
  status: {
    en: string;
    zh: string;
  };
  statusType: 'under_review' | 'published';
  authorRole: {
    en: string;
    zh: string;
  };
  representative: boolean;
  codeUrl?: string;
  paperUrl?: string;
  doi?: string;
  highlights: {
    en: string;
    zh: string;
  };
  quickTakeaway: {
    en: string;
    zh: string;
    metrics: string[];
  };
  thumbnailType: 'pam' | 'drivetrain' | 'throughwater' | 'endoscopy';
  bibtex: string;
}

export interface Patent {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  type: {
    en: string;
    zh: string;
  };
  appNo: string;
  filingDate: string;
  status: {
    en: string;
    zh: string;
  };
  inventors: string[];
  applicant?: {
    en: string;
    zh: string;
  };
  category?: 'invention' | 'utility_model';
}

export interface Project {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  period: string;
  context: {
    en: string;
    zh: string;
  };
  role: {
    en: string;
    zh: string;
  };
  award: {
    en: string;
    zh: string;
  };
  highlights: {
    en: string[];
    zh: string[];
  };
  tags: string[];
  category?: 'industry' | 'competition';
  client?: {
    en: string;
    zh: string;
  };
}

export interface Award {
  id: string;
  year: string;
  title: {
    en: string;
    zh: string;
  };
  level: {
    en: string;
    zh: string;
  };
  category: 'competition' | 'scholarship' | 'honor';
}

export interface Experience {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  institution: {
    en: string;
    zh: string;
  };
  location: {
    en: string;
    zh: string;
  };
  period: string;
  advisor: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  points: {
    en: string[];
    zh: string[];
  };
}

export interface TalkPoster {
  id: string;
  type: 'talk' | 'poster' | 'seminar';
  title: {
    en: string;
    zh: string;
  };
  event: {
    en: string;
    zh: string;
  };
  location: {
    en: string;
    zh: string;
  };
  date: string;
  status: 'upcoming' | 'presented';
  slidesUrl?: string;
  posterUrl?: string;
  videoUrl?: string;
  abstract: {
    en: string;
    zh: string;
  };
  tags: string[];
}

export const PROFILE_DATA = {
  name: {
    zh: '刘博翔',
    en: 'Boxiang Liu'
  },
  title: {
    zh: '湖南科技大学自动化专业2023级本科生',
    en: 'Undergraduate Student in Automation (Class of 2023)'
  },
  institution: {
    zh: '湖南科技大学 信息与电气工程学院 自动化系',
    en: 'School of Information and Electrical Engineering, Hunan University of Science and Technology'
  },
  laboratory: {
    zh: '海洋智能探测与控制团队 / 湖南省复杂系统智能控制与维护重点实验室',
    en: 'Marine Intelligent Detection and Control Team / Hunan Provincial Key Laboratory of Intelligent Control and Maintenance for Complex Systems'
  },
  location: {
    zh: '中国 · 湖南 · 湘潭',
    en: 'Xiangtan, Hunan, China'
  },
  email: 'boxiangliu17@gmail.com',
  github: 'https://github.com/BoxiangLiu-111',
  targetRepo: 'https://github.com/BoxiangLiu-111/BoxiangLiu-111.github.io',
  orcid: 'https://orcid.org/0009-0004-4755-0656',
  scholar: 'https://scholar.google.com/citations?user=CR3LshsAAAAJ&hl=en',

  bio: {
    zh: `我是刘博翔，湖南科技大学（HNUST）自动化专业本科生，师从陈超洋教授与梁思奇博士，预计于2027年6月毕业。我的研究主要聚焦于计算成像与生物医学成像、物理引导逆问题学习、以及智能多传感器状态监测。目前已在 *Physica Scripta* 期刊发表合作论文 1 篇，另有多篇学术手稿分别在 *Knowledge-Based Systems*、*IEEE Transactions on Instrumentation and Measurement* 及 *《自动化学报》* 在审。`,
    en: `I am Boxiang Liu, an undergraduate student in Automation at Hunan University of Science and Technology (HNUST), advised by Prof. Chaoyang Chen and Dr. Siqi Liang, and expected to graduate in June 2027. My research focuses on computational and biomedical imaging, physics-guided learning for inverse problems, and intelligent multisensor condition monitoring. I have co-authored a journal article published in *Physica Scripta*, with additional manuscripts currently under review at *Knowledge-Based Systems*, *IEEE Transactions on Instrumentation and Measurement*, and *Acta Automatica Sinica*.`
  },

  researchInterests: [
    {
      id: 'imaging',
      title: {
        zh: '计算成像与生物医学成像',
        en: 'Computational and Biomedical Imaging'
      },
      desc: {
        zh: '聚焦光学/声学分辨率光声显微成像 (PAM) 与光声内窥成像 (PAE) 的图像超分辨率重建、去失焦模糊、稀疏采样重建与微血管拓扑保持。',
        en: 'Focused on super-resolution reconstruction, out-of-focus deblurring, sparse-sampling reconstruction, and vascular topology preservation for photoacoustic microscopy (PAM) and photoacoustic endoscopy (PAE).'
      },
      keywords: ['Photoacoustic Microscopy', 'Endoscopy', 'Vascular Reconstruction', 'Super-Resolution', 'Frangi Vesselness']
    },
    {
      id: 'physics_ml',
      title: {
        zh: '物理引导机器学习与逆问题',
        en: 'Physics-Guided Machine Learning and Inverse Problems'
      },
      desc: {
        zh: '开发融合物理先验、结构约束与领域知识的学习方法，致力于在有限、噪声或退化观测条件下求解逆问题，重点关注高可靠性与可解释性的图像重建与复原。',
        en: 'Developing learning-based methods that integrate physical priors, structural constraints, and domain knowledge to solve inverse problems under limited, noisy, or degraded observations, with an emphasis on reliable and interpretable reconstruction and recovery.'
      },
      keywords: ['Physics-Guided ML', 'Through-Water Restoration', 'Privileged Information', 'Knowledge Distillation', 'Inverse Problems']
    },
    {
      id: 'sensing',
      title: {
        zh: '智能传感与状态监测',
        en: 'Intelligent Sensing and Condition Monitoring'
      },
      desc: {
        zh: '面向复杂工程系统开发智能传感与数据驱动监测方法，重点关注多传感器信息融合、表征学习、异常检测以及变工况条件下的高鲁棒性状态评估。',
        en: 'Developing intelligent sensing and data-driven monitoring methods for complex engineering systems, with interests in multisensor information fusion, representation learning, anomaly detection, and robust condition assessment under varying operating conditions.'
      },
      keywords: ['Order Tracking', 'Transfer Residuals', 'Condition Monitoring', 'Wind Turbine Drivetrain', 'Sensor Fusion']
    }
  ],

  education: [
    {
      school: {
        zh: '湖南科技大学',
        en: 'Hunan University of Science and Technology (HNUST)'
      },
      degree: {
        zh: '工学学士 · 自动化专业',
        en: 'Bachelor of Engineering in Automation'
      },
      period: '2023.09 – 2027.06 (Expected)',
      location: {
        zh: '中国 · 湖南 · 湘潭',
        en: 'Xiangtan, Hunan, China'
      },
      advisor: {
        zh: '陈超洋 教授 (IET Fellow / 国家优青)',
        en: 'Prof. Chaoyang Chen (IET Fellow)'
      },
      courses: {
        zh: '核心课程：人工智能、数据结构与算法、运筹与最优化方法、自动控制原理、离散数学、微机原理与接口技术等',
        en: 'Core Courses: Artificial Intelligence, Data Structures & Algorithms, Operations Research and Optimisation, Principles of Automatic Control, Discrete Mathematics, Microcontroller Technology.'
      }
    }
  ],

  researchExperiences: [
    {
      id: 'exp-1',
      title: {
        zh: '光声成像图像超分辨率重建与图像恢复研究',
        en: 'Photoacoustic Microscopy Super-Resolution Reconstruction & Image Restoration'
      },
      institution: {
        zh: '湖南省复杂系统智能控制与维护重点实验室',
        en: 'Key Laboratory of Intelligent Control & Maintenance for Complex Systems'
      },
      location: {
        zh: '湖南 · 湘潭',
        en: 'Xiangtan, Hunan'
      },
      period: '2024.09 – 2026.08',
      advisor: {
        zh: '梁思奇 博士',
        en: 'Dr. Siqi Liang'
      },
      description: {
        zh: '围绕光学分辨率光声显微成像稀疏采样超分辨率重建与光声内窥图像失焦退化恢复展开系统研究。',
        en: 'Conducted research on sparse-sampling super-resolution reconstruction for optical-resolution PAM and CNN-based out-of-focus restoration for photoacoustic endoscopy.'
      },
      points: {
        zh: [
          '提出血管拓扑感知的层次化注意力重建框架 VascHAT，结合多尺度 Hessian 血管测度与可微软盒维数监督，实现 2×/4× 稀疏采样下高保真血管拓扑与管径保持（第一作者，KBS 在审）。',
          '针对光声内窥成像（PAE）离焦模糊退化问题，参与构建仿真与活体仿体实验平台，在碳丝与叶脉仿体上完成深度学习去模糊与超分辨率验证（第二作者，Physica Scripta 已发表）。',
          '作为骨干参与申报 2 项光声成像国家发明/实用新型专利，完成软硬件整合测试与技术文档编制。'
        ],
        en: [
          'Proposed VascHAT, a vessel-topology-aware staged hierarchical framework with multiscale Hessian vesselness and differentiable soft box-counting losses, preserving vascular continuity and vessel widths under 2×/4× sparse sampling (First Author, under review at Knowledge-Based Systems).',
          'Participated in out-of-focus restoration for photoacoustic endoscopy (PAE), benchmarking CNNs against model-based deconvolution on phantoms and in vivo specimens (Second Author, published in Physica Scripta).',
          'Contributed to the patent documentation, system integration, and experimentation for 2 Chinese patent applications on PA imaging.'
        ]
      }
    },
    {
      id: 'exp-2',
      title: {
        zh: '海洋图像感知与跨介质成像恢复',
        en: 'Marine Image Perception & Multi-Sensor Collaborative Sensing'
      },
      institution: {
        zh: '海洋智能探测与控制团队',
        en: 'Marine Intelligent Detection & Control Team'
      },
      location: {
        zh: '湖南 · 湘潭 & 三亚',
        en: 'Xiangtan & Sanya, China'
      },
      period: '2025.12 – 2027.06',
      advisor: {
        zh: '梁思奇 博士、陈超洋 教授',
        en: 'Dr. Siqi Liang, Prof. Chaoyang Chen'
      },
      description: {
        zh: '聚焦水下/水面复杂海洋环境图像感知、透水遥感成像恢复与跨介质多传感器协同感知研究。',
        en: 'Focusing on complex marine optical image perception, single-image through-water restoration, and cross-media multi-sensor collaborative sensing.'
      },
      points: {
        zh: [
          '参与提出面向单幅透水 RGB 图像的反事实分阶段复原框架 CFRR，通过弱深度特权蒸馏实现无元数据依赖的高精度去眩光、水面波纹几何校正与辐射补偿（学生二作，《自动化学报》在审）。',
          '研究跨水空介质光学感知与多传感器时空同步标定，提升近海复杂水下环境目标的成像对比度与特征可分辨性。'
        ],
        en: [
          'Co-developed CFRR, a counterfactual stage-wise restoration framework with privileged depth distillation for through-water aerial RGB imagery, eliminating runtime metadata dependence (Student 2nd Author, under review at Acta Automatica Sinica).',
          'Investigated cross-medium optical perception and multisensor spatiotemporal synchronization to enhance underwater imaging contrast and feature resolvability.'
        ]
      }
    },
    {
      id: 'exp-3',
      title: {
        zh: '智能传感与状态监测研究',
        en: 'Intelligent Sensing & Condition Monitoring'
      },
      institution: {
        zh: '湖南省复杂系统智能控制与维护重点实验室 / 海洋智能探测与控制团队',
        en: 'Key Laboratory of Intelligent Control & Maintenance / Marine Intelligent Detection & Control Team'
      },
      location: {
        zh: '湖南 · 湘潭',
        en: 'Xiangtan, Hunan'
      },
      period: '2025.12 – 2027.06',
      advisor: {
        zh: '梁思奇 博士、陈超洋 教授',
        en: 'Dr. Siqi Liang, Prof. Chaoyang Chen'
      },
      description: {
        zh: '围绕变工况工业大型装备与风电机组传动链智能传感、微弱故障冲击特征提取与健康状态监测展开系统研究。',
        en: 'Conducted research on intelligent sensing, faint fault signature extraction, and health condition monitoring for variable-speed industrial machinery and wind turbine drivetrains.'
      },
      points: {
        zh: [
          '建立基于相干门控复数阶次传递残差 (CG-COTR) 的风电机组传动链监测表征，在 NREL GRC 变速变载基准上实现 0.925 AUROC 与高鲁棒性（第一作者，IEEE TIM 在审）。',
          '探索宽变工况下多通道振动传感器的协同表征与阶次跟踪算法，攻关强工业背景噪声下的微弱冲击提取。'
        ],
        en: [
          'Developed coherence-gated complex order-transfer residuals (CG-COTR) for variable-speed wind turbine drivetrains, achieving 0.925 AUROC on the NREL GRC benchmark with single-thread real-time feasibility (First Author, under review at IEEE TIM).',
          'Explored multi-channel vibration sensor collaborative representations and order-tracking algorithms to extract faint fault transients under variable speeds and strong industrial background noise.'
        ]
      }
    }
  ],

  publications: [
    {
      id: 'pub-vaschat',
      title: {
        en: 'VascHAT: A Vascular-Structure-Aware Hybrid Attention Framework for Sparsely Sampled Photoacoustic Microscopy Reconstruction',
        zh: 'VascHAT：面向稀疏采样光声显微成像重建的血管结构感知混合注意力框架'
      },
      authors: ['Boxiang Liu', 'Jie Deng', 'Jiayi Wang', 'Chaoyang Chen', 'Sung-liang Chen', 'Siqi Liang*'],
      venue: 'Knowledge-Based Systems (Elsevier)',
      year: 2026,
      status: {
        en: 'Under Review',
        zh: '在审 (Under Review)'
      },
      statusType: 'under_review',
      authorRole: {
        en: 'First Author',
        zh: '第一作者'
      },
      representative: true,
      codeUrl: 'https://github.com/BoxiangLiu-111/VascHAT',
      highlights: {
        en: 'Combines Hybrid Attention Transformer with multiscale Hessian vesselness and differentiable soft box-counting losses. On 50 held-out mouse-ear PAM datasets, improves clDice by 7.95% and reduces vessel-width relative size error (RSE) to 7.82% under 2x subsampling.',
        zh: '将混合注意力 Transformer 与多尺度 Hessian 血管测度及可微软盒维数损失相结合。在 50 组留出小鼠耳部光声显微测试集上，在 2× 稀疏采样下将中心线 Dice 提升 7.95%，并将管径相对尺寸误差降低至 7.82%。'
      },
      quickTakeaway: {
        zh: '【痛点】光声显微 (PAM) 稀疏采样易导致微血管拓扑断裂与管径变形失真。\n【创新】提出融合多尺度 Hessian 血管测度与可微软盒维数 (Soft Box-Counting) 的混合注意力网络 VascHAT。\n【战绩】在 2×/4× 欠采样下中心线 Dice 提升 7.95%，微血管管径误差降至 7.82%，攻克保拓扑超分辨率重建。',
        en: '【Challenge】Sparse PAM scans induce vessel disconnection & caliber distortion.\n【Innovation】Proposes VascHAT, integrating multiscale Hessian vesselness with differentiable soft box-counting loss.\n【Results】Improves clDice by 7.95% & slashes vessel-width error to 7.82% under 2×/4× subsampling.',
        metrics: ['clDice +7.95%', 'RSE 7.82%', '2×/4× Subsampling']
      },
      thumbnailType: 'pam',
      bibtex: `@article{liu2026vaschat,
  title={VascHAT: A Vascular-Structure-Aware Hybrid Attention Framework for Sparsely Sampled Photoacoustic Microscopy Reconstruction},
  author={Liu, Boxiang and Deng, Jie and Wang, Jiayi and Chen, Chaoyang and Chen, Sung-liang and Liang, Siqi},
  journal={Knowledge-Based Systems},
  year={2026},
  note={Under Review}
}`
    },
    {
      id: 'pub-cgcotr',
      title: {
        en: 'Healthy State Referenced Transfer Residuals Between Sensors for Variable Speed Wind Turbine Drivetrain Monitoring',
        zh: '面向变速风电机组传动链监测的跨传感器健康基准传递残差'
      },
      authors: ['Boxiang Liu', 'Jiayi Wang', 'Jie Deng', 'Chaoyang Chen', 'Siqi Liang*'],
      venue: 'IEEE Transactions on Instrumentation and Measurement',
      year: 2026,
      status: {
        en: 'Under Review',
        zh: '在审 (Under Review)'
      },
      statusType: 'under_review',
      authorRole: {
        en: 'First Author',
        zh: '第一作者'
      },
      representative: true,
      codeUrl: 'https://github.com/BoxiangLiu-111/CG-COTR',
      highlights: {
        en: 'Defines coherence-gated complex order-transfer residuals (CG-COTR) indexed by sensor-pair, direction, and shaft-order. Achieved 0.925 AUROC on NREL Gearbox Reliability Collaborative benchmark with only 11.82 ms p95 single-thread CPU latency.',
        zh: '提出了显式保留传感器对、预测方向与轴转速阶次特性的相干门控复数传递残差 (CG-COTR)。在 NREL GRC 真实基准上将记录级 AUROC 提升至 0.925，单核 CPU 处理耗时仅 11.82 ms。'
      },
      quickTakeaway: {
        zh: '【痛点】变速变载风电传动链多测点阶次重叠严重，微弱故障冲击常被工况波动与强背景噪声掩盖。\n【创新】构建显式保留传感器对、预测方向与转轴阶次的相干门控复数传递残差 (CG-COTR)。\n【战绩】在权威 NREL GRC 齿轮箱基准上获得 0.925 AUROC，单核 CPU 延迟仅 11.82 ms，适合工业端侧实时部署。',
        en: '【Challenge】Variable speeds trigger order overlapping and faint fault impacts masked by noise.\n【Innovation】Develops coherence-gated complex order-transfer residuals (CG-COTR) indexed across sensor pairs & shaft orders.\n【Results】0.925 AUROC on NREL GRC benchmark with ultra-low 11.82 ms single-thread CPU latency.',
        metrics: ['AUROC 0.925', '11.82 ms Latency', 'NREL Benchmark']
      },
      thumbnailType: 'drivetrain',
      bibtex: `@article{liu2026healthy,
  title={Healthy State Referenced Transfer Residuals Between Sensors for Variable Speed Wind Turbine Drivetrain Monitoring},
  author={Liu, Boxiang and Wang, Jiayi and Deng, Jie and Chen, Chaoyang and Liang, Siqi},
  journal={IEEE Transactions on Instrumentation and Measurement},
  year={2026},
  note={Under Review}
}`
    },
    {
      id: 'pub-cfrr',
      title: {
        en: 'Counterfactual Stage Supervision and Privileged Depth Distillation for Single RGB Through-Water Image Restoration',
        zh: '基于反事实分阶段监督与特权深度蒸馏的单幅 RGB 透水图像复原'
      },
      authors: ['Siqi Liang', 'Boxiang Liu', 'Jiayi Wang', 'Chaoyang Chen*'],
      venue: 'Acta Automatica Sinica (自动化学报)',
      year: 2026,
      status: {
        en: 'Under Review',
        zh: '在审 (Under Review)'
      },
      statusType: 'under_review',
      authorRole: {
        en: 'Student 2nd Author (Supervisor 1st)',
        zh: '学生第二作者 (导师第一作者)'
      },
      representative: true,
      codeUrl: 'https://github.com/BoxiangLiu-111/CFRR',
      highlights: {
        en: 'Decouples through-water degradation into deglinting, confidence-aware geometric warping, and radiometric refinement. A privileged depth teacher distils scene depth prior into RGB student, yielding 35.73 dB PSNR on 101 Sea-Undistort scenes with 2.12M parameters.',
        zh: '将透水退化分解为去眩光、置信感知有界几何重定位与辐射细化。通过特权教师将场景平均深度弱物理先验蒸馏至单幅 RGB 学生网络，在 101 个 Sea-Undistort 留出测试场景上达到 35.73 dB PSNR，部署模型仅 212 万参数。'
      },
      quickTakeaway: {
        zh: '【痛点】无人机透水遥感成像受日光眩光、水面随机波纹折射与水体选择性吸收衰减的多重强退化影响。\n【创新】提出“去眩光 → 置信有界几何变形校正 → 辐射细化”三阶段反事实解耦框架，并通过特权深度教师完成无元数据跨模态蒸馏。\n【战绩】在 101 个 Sea-Undistort 留出测试场景上达到 35.73 dB PSNR，模型仅 2.12M 超轻量参数。',
        en: '【Challenge】Aerial through-water imaging suffers from sun glint, dynamic wave refraction, and attenuation.\n【Innovation】Decoupled 3-stage counterfactual restoration pipeline with privileged depth distillation.\n【Results】35.73 dB PSNR across 101 test scenes with an ultra-lightweight 2.12M parameter footprint.',
        metrics: ['PSNR 35.73 dB', '2.12M Params', 'No Metadata Req.']
      },
      thumbnailType: 'throughwater',
      bibtex: `@article{liang2026counterfactual,
  title={Counterfactual Stage Supervision and Privileged Depth Distillation for Single RGB Through-Water Image Restoration},
  author={Liang, Siqi and Liu, Boxiang and Wang, Jiayi and Chen, Chaoyang},
  journal={Acta Automatica Sinica},
  year={2026},
  note={Under Review}
}`
    },
    {
      id: 'pub-pae-focus',
      title: {
        en: 'Restoration of Out-of-Focus Region for Photoacoustic Endoscopic Imaging Enabled by Convolutional Neural Networks',
        zh: '基于卷积神经网络的光声内窥成像离焦区域图像复原'
      },
      authors: ['Siqi Liang*', 'Boxiang Liu', 'Chaoyang Chen', 'Mingyang Lv', 'Yue Hu', 'Qingshan Liu', 'Sung-Liang Chen*', 'Myeongsu Seong*'],
      venue: 'Physica Scripta (IOP Publishing)',
      year: 2026,
      status: {
        en: 'Published (Vol. 101, Art. 216005)',
        zh: '已发表 (Vol. 101, Art. 216005)'
      },
      statusType: 'published',
      authorRole: {
        en: 'Second Author',
        zh: '第二作者'
      },
      representative: true,
      doi: '10.1088/1402-4896/ae6ad2',
      paperUrl: 'https://doi.org/10.1088/1402-4896/ae6ad2',
      highlights: {
        en: 'The first study investigating CNNs for out-of-focus PAE restoration. Evaluated RRDB, EDSR, RCA, and FFA against Richardson-Lucy deconvolution on carbon fibers, tungsten wires, and dyed leaf phantoms, reducing relative size error from 21.75% to 3.86%.',
        zh: '首个针对光声内窥成像 (PAE) 离焦区域进行深度学习复原的研究。在碳纤维、钨丝和叶脉仿体实验中对比了 RRDB、EDSR 等网络与传统 Richardson-Lucy 反褶积算法，将管径相对尺寸误差从 21.75% 大幅降低至 3.86%。'
      },
      quickTakeaway: {
        zh: '【痛点】微型光声内窥镜 (PAE) 焦深极短，管壁曲率变化导致大量生物组织处于离焦模糊区，微细结构失真。\n【创新】国际首个探究深层 CNN (RRDB/EDSR/FFA) 针对 PAE 离焦退化进行非线性反演恢复的工作。\n【战绩】在碳丝、钨丝与叶脉多重实验中，将微结构管径测量相对误差从经典 Richardson-Lucy 算法的 21.75% 骤降至 3.86%。',
        en: '【Challenge】Ultra-short depth of focus in PAE causes severe out-of-focus blur on lumen walls.\n【Innovation】First study demonstrating deep CNN super-resolution and deblurring for out-of-focus endoscopic PA images.\n【Results】Plummets relative size error from 21.75% (Richardson-Lucy deconvolution) to 3.86% on biological leaf and wire phantoms.',
        metrics: ['Error 21.75% → 3.86%', 'First PAE CNN Work', 'Physica Scripta 2026']
      },
      thumbnailType: 'endoscopy',
      bibtex: `@article{liang2026restoration,
  title={Restoration of out-of-focus region for photoacoustic endoscopic imaging enabled by convolutional neural networks},
  author={Liang, Siqi and Liu, Boxiang and Chen, Chaoyang and Lv, Mingyang and Hu, Yue and Liu, Qingshan and Chen, Sung-Liang and Seong, Myeongsu},
  journal={Physica Scripta},
  volume={101},
  number={2},
  pages={216005},
  year={2026},
  publisher={IOP Publishing},
  doi={10.1088/1402-4896/ae6ad2}
}`
    }
  ] as Publication[],

  patents: [
    {
      id: 'patent-marine-distance',
      title: {
        zh: '海洋工程测绘用水上距离勘测仪',
        en: 'Water Surface Distance Surveying Instrument for Marine Engineering Surveying and Mapping'
      },
      type: {
        zh: '中国发明专利申请',
        en: 'Chinese Invention Patent Application'
      },
      category: 'invention',
      appNo: '202511822593.4',
      filingDate: '2025.12.04',
      status: {
        zh: '在审 · 已受理 (Under examination)',
        en: 'Under Examination (Accepted)'
      },
      applicant: {
        zh: '湖南科技大学',
        en: 'Hunan University of Science and Technology'
      },
      inventors: ['梁思奇', '刘博翔', '陈超洋', '胡仕刚', '邹桢']
    },
    {
      id: 'patent-pipeline-corrosion',
      title: {
        zh: '一种基于光声成像的海底管网腐蚀检测系统',
        en: 'A Photoacoustic Imaging-Based Corrosion Detection System for Subsea Pipeline Networks'
      },
      type: {
        zh: '中国实用新型专利申请',
        en: 'Chinese Utility Model Patent Application'
      },
      category: 'utility_model',
      appNo: '202522329784.9',
      filingDate: '2025.11.03',
      status: {
        zh: '在审 · 已受理 (Under examination)',
        en: 'Under Examination (Accepted)'
      },
      applicant: {
        zh: '湖南科技大学',
        en: 'Hunan University of Science and Technology'
      },
      inventors: ['梁思奇', '刘博翔', '陈超洋', '赵昕', '王佳仪']
    },
    {
      id: 'patent-fpga-submarine',
      title: {
        zh: '一种新型基于 FPGA 控制的小型潜水艇海底天然气勘测系统',
        en: 'A Novel FPGA-Controlled Small Submarine Subsea Natural Gas Survey System'
      },
      type: {
        zh: '中国实用新型专利申请',
        en: 'Chinese Utility Model Patent Application'
      },
      category: 'utility_model',
      appNo: '202522276148.4',
      filingDate: '2025.10.27',
      status: {
        zh: '在审 · 已受理 (Under examination)',
        en: 'Under Examination (Accepted)'
      },
      applicant: {
        zh: '湖南科技大学',
        en: 'Hunan University of Science and Technology'
      },
      inventors: ['王佳仪', '梁思奇', '陈超洋', '刘博翔', '赵昕']
    },
    {
      id: 'patent-bci-remote',
      title: {
        zh: '一种用于监测脑机接口电极植入的光声遥感成像系统',
        en: 'A Photoacoustic Remote-Sensing Imaging System for Monitoring Brain–Computer Interface Electrode Implantation'
      },
      type: {
        zh: '中国实用新型专利申请',
        en: 'Chinese Utility Model Patent Application'
      },
      category: 'utility_model',
      appNo: '202522269509.2',
      filingDate: '2025.10.27',
      status: {
        zh: '初步审查阶段 (Under preliminary examination)',
        en: 'Under Preliminary Examination'
      },
      applicant: {
        zh: '湖南科技大学',
        en: 'Hunan University of Science and Technology'
      },
      inventors: ['梁思奇', '刘博翔', '陈超洋', '唐鹏', '邹珍']
    },
    {
      id: 'patent-stent-pam',
      title: {
        zh: '一种基于声学分辨率光声显微成像的无创支架监测方法',
        en: 'A Non-Invasive Stent Monitoring Method Based on Acoustic-Resolution Photoacoustic Microscopy'
      },
      type: {
        zh: '中国发明专利申请',
        en: 'Chinese Invention Patent Application'
      },
      category: 'invention',
      appNo: '202511474604.4',
      filingDate: '2025.10.15',
      status: {
        zh: '实质审查阶段 (Under substantive examination)',
        en: 'Under Substantive Examination'
      },
      applicant: {
        zh: '湖南科技大学',
        en: 'Hunan University of Science and Technology'
      },
      inventors: ['梁思奇', '刘博翔', '陈超洋', '陈峰', '刘清山']
    }
  ] as Patent[],

  projects: [
    {
      id: 'proj-fireworks',
      title: {
        zh: '组合纸筒烟花组装的智能视觉检测系统',
        en: 'Intelligent Computer Vision Inspection System for Combined Paper-Tube Fireworks Assembly'
      },
      period: '2025.06 – 2026.05',
      context: {
        zh: '企业委托横向项目',
        en: 'Industry-Commissioned R&D Project'
      },
      client: {
        zh: '湖南省浏阳市麦明特科技有限公司',
        en: 'Hunan Liuyang Maiminte Technology Co., Ltd.'
      },
      category: 'industry',
      role: {
        zh: '项目负责人 / 核心完成人',
        en: 'Project Lead / Core Developer'
      },
      award: {
        zh: '已完成 · 产线交付应用 (Delivered)',
        en: 'Completed & Deployed to Production Line'
      },
      highlights: {
        zh: [
          '数据闭环与现场采集：面向组合纸筒烟花生产中引线颜色/数量、纸片有无、内筒方向及药量异常等多工序缺陷，负责现场图像采集、清洗与标注，构建 4,000 张真实工业产线数据集，打通从现场采集到训练评估的完整数据闭环；',
          '算法场景化改进与精度跃升：基于 YOLOv8 针对小目标与细粒度缺陷进行场景化改进，引入 CBAM 注意力机制、BiFPN 特征融合与 MobileNetV4 轻量架构，mAP@0.5 较基线提升约 35%（综合检测精度提升达 1.5 倍）；',
          '模型优化与边缘端仪器闭环：采用模型剪枝、知识蒸馏与 INT8 量化，导出 ONNX 并结合 TensorRT、OpenVINO 及 Intel NCS2 神经棒加速，成功部署于 RK3588 与香橙派 5 Plus 边缘平台；联合海康工业相机（MV-CH250）与 Qt 交互系统，实现“图像采集—边缘推理—缺陷判定—报警显示”一体化手持检测仪器。'
        ],
        en: [
          'Industrial Data Acquisition & Closed-Loop: Addressed multivariable assembly defects (fuse color/count, paper presence, inner tube orientation, pyrotechnic charge anomalies); constructed a 4,000-image factory dataset with end-to-end data acquisition, cleaning, annotation, and benchmarking.',
          'Algorithm Adaptation & Accuracy Gain: Developed domain-adapted YOLOv8 with CBAM attention, BiFPN feature fusion, and MobileNetV4 lightweight backbone for small-target and subtle defects; boosted mAP@0.5 by ~35% (1.5x detection accuracy over baseline).',
          'Edge Optimization & Handheld Device: Applied model pruning, knowledge distillation, and INT8 quantization; converted models to ONNX and accelerated via TensorRT, OpenVINO, and Intel NCS2; deployed on RK3588 and Orange Pi 5 Plus; integrated Hikvision industrial camera (MV-CH250) and custom Qt GUI to deliver a handheld, real-time industrial inspection instrument.'
        ]
      },
      tags: ['YOLOv8', 'RK3588', 'Orange Pi 5 Plus', 'Hikvision MV-CH250', 'CBAM / BiFPN', 'TensorRT', 'OpenVINO', 'INT8 Quantization', 'Qt / C++']
    },
    {
      id: 'proj-1',
      title: {
        zh: '云边协同多模态道路缺陷检测与可视化系统',
        en: 'Cloud–Edge Collaborative Multimodal Road-Defect Detection and Visualisation System'
      },
      period: '2024.12 – 2025.04',
      context: {
        zh: '中国大学生计算机设计大赛 (参赛项目)',
        en: 'China Undergraduate Computer Design Contest'
      },
      category: 'competition',
      role: {
        zh: '项目负责人 & 算法负责人 (6人团队)',
        en: 'Project Lead & Algorithm Lead (6-member team)'
      },
      award: {
        zh: '中南赛区二等奖 (2025)',
        en: 'Second Prize, Central South Regional Contest (2025)'
      },
      highlights: {
        zh: [
          '设计并实现了端到端轻量化道路缺陷检测网络（基于改进 YOLO11），结合轻量特征提取与微小裂痕图像增强算法；',
          '在树莓派 4B 边缘端部署深度相机视觉采集与推理管道，实现缺陷数据实时上传与云端大屏三维可视化渲染；',
          '统筹 6 人团队技术分工，主笔撰写全部算法技术报告并完成现场实机汇报答辩。'
        ],
        en: [
          'Designed and developed an end-to-end cloud-edge defect inspection pipeline integrating YOLO11 visual detection, lightweight modules, and image enhancement.',
          'Integrated Raspberry Pi 4B and depth-camera hardware for real-time edge acquisition, local inference, and cloud dashboard visualization.',
          'Supervised the 6-member team, authored technical documentation, and delivered the competition demonstration.'
        ]
      },
      tags: ['YOLO11', 'Raspberry Pi', 'Cloud-Edge', 'Embedded Systems', 'Computer Vision']
    },
    {
      id: 'proj-2',
      title: {
        zh: '动态约束下的多智能体协同轨迹与部署优化',
        en: 'Multi-Agent Trajectory and Deployment Optimisation under Dynamic Constraints'
      },
      period: '2025.08 – 2025.09',
      context: {
        zh: '全国大学生数学建模竞赛 (参赛项目)',
        en: 'China Undergraduate Mathematical Contest in Modeling'
      },
      category: 'competition',
      role: {
        zh: '主力建模与算法编程骨干 (3人团队)',
        en: 'Primary Modelling & Programming Contributor (3-member team)'
      },
      award: {
        zh: '湖南赛区二等奖 (2025)',
        en: 'Second Prize, Hunan Division (2025)'
      },
      highlights: {
        zh: [
          '构建了非线性动力学与障碍物约束下的多智能体三维运动学模型、几何动态覆盖度度量与步长时序离散优化模型；',
          '在 Python 与 MATLAB 中实现并对比了粒子群优化 (PSO)、协方差矩阵自适应进化策略 (CMA-ES) 与混合遗传算法；',
          '完成了算法收敛性分析、参数敏感性验证以及平滑轨迹三维动态可视化呈现。'
        ],
        en: [
          'Formulated 3D kinematic, geometric-coverage, and time-stepping models for multi-agent deployment under dynamic constraints.',
          'Implemented and benchmarked PSO, CMA-ES, genetic algorithms, and hierarchical optimization in Python and MATLAB.',
          'Performed parameter validation, sensitivity analysis, convergence verification, and animated 3D trajectory visualization.'
        ]
      },
      tags: ['Mathematical Modeling', 'PSO / CMA-ES', 'Multi-Agent Systems', 'Python / MATLAB']
    }
  ] as Project[],

  awards: [
    {
      id: 'aw-1',
      year: '2025',
      title: {
        zh: '湖南省大学生统计建模大赛 一等奖',
        en: 'First Prize, Hunan Provincial Undergraduate Statistical Modelling Competition'
      },
      level: {
        zh: '省级一等奖',
        en: 'Provincial First Prize'
      },
      category: 'competition'
    },
    {
      id: 'aw-2',
      year: '2025',
      title: {
        zh: '全国大学生数学建模竞赛 湖南赛区二等奖',
        en: 'Second Prize, China Undergraduate Mathematical Contest in Modeling (Hunan Division)'
      },
      level: {
        zh: '省级二等奖',
        en: 'Provincial Second Prize'
      },
      category: 'competition'
    },
    {
      id: 'aw-3',
      year: '2025',
      title: {
        zh: '中国大学生计算机设计大赛 中南赛区二等奖',
        en: 'Second Prize, Central South Regional Contest, China Undergraduate Computer Design Contest'
      },
      level: {
        zh: '大区级二等奖',
        en: 'Regional Second Prize'
      },
      category: 'competition'
    },
    {
      id: 'aw-4',
      year: '2025',
      title: {
        zh: '中国高校计算机大赛 人工智能创意赛中南赛区二等奖',
        en: 'Second Prize, Central South Regional AI Challenge, China Collegiate Computing Competition'
      },
      level: {
        zh: '大区级二等奖',
        en: 'Regional Second Prize'
      },
      category: 'competition'
    },
    {
      id: 'aw-5',
      year: '2025',
      title: {
        zh: '湖南省大学生物联网创新设计大赛 三等奖',
        en: 'Third Prize, Hunan Provincial Undergraduate IoT Innovation and Design Competition'
      },
      level: {
        zh: '省级三等奖',
        en: 'Provincial Third Prize'
      },
      category: 'competition'
    },
    {
      id: 'aw-6',
      year: '2024–2025',
      title: {
        zh: '一等综合奖学金',
        en: 'First-Class Comprehensive Scholarship'
      },
      level: {
        zh: '校级特优',
        en: 'University Top Honor'
      },
      category: 'scholarship'
    },
    {
      id: 'aw-7',
      year: '2025',
      title: {
        zh: '学术科研先进个人',
        en: 'Outstanding Individual in Academic Research'
      },
      level: {
        zh: '校级单项奖',
        en: 'University Distinction'
      },
      category: 'honor'
    },
    {
      id: 'aw-8',
      year: '2025',
      title: {
        zh: '优秀学生 / 优秀学生干部 / 优秀共青团员',
        en: 'Outstanding Student / Outstanding Student Leader / Outstanding Communist Youth League Member'
      },
      level: {
        zh: '校级荣誉称号',
        en: 'University Honors'
      },
      category: 'honor'
    }
  ] as Award[],

  teaching: [
    {
      id: 'teach-1',
      course: {
        zh: '自动化专业课业与科研朋辈助学计划 (Peer Tutoring & Lab Mentoring)',
        en: 'Automation Peer Tutoring & Research Lab Mentorship'
      },
      period: '2026.9 – 2027.6',
      institution: {
        zh: '信息与电气工程学院',
        en: 'School of Information and Electrical Engineering'
      },
      role: {
        zh: '学业答疑骨干 / 实验室本科新苗引路人',
        en: 'Undergraduate Peer Tutor & Junior Researcher Guide'
      },
      description: {
        zh: '为低年级自动化专业本科生辅导《自动控制原理》《微机原理》及 Python/PyTorch 编程基础；分享学术论文阅读、LaTeX 排版规范与科研代码版本管理经验，协助新进实验室本科生快速融入科研。',
        en: 'Conducted mentoring sessions for junior automation students in Automatic Control Principles, Microcontroller Technology, and Python/PyTorch workflows; shared practical guidelines on literature reading, LaTeX manuscript formatting, and reproducible Git version control.'
      }
    }
  ],

  skills: {
    programming: ['Python', 'MATLAB', 'PyTorch', 'OpenCV', 'NumPy', 'SciPy', 'Pandas', 'scikit-learn', 'Matplotlib', 'CUDA', 'C'],
    research: ['Deep Learning', 'Computer Vision', 'Biomedical Image Reconstruction (PAM/PAE)', 'Order-Tracking Analysis', 'Signal Processing', 'Scientific Computing'],
    embedded: ['Raspberry Pi 4B', 'STM32', 'Camera Calibration', 'Sensor Synchronization', 'Arduino'],
    tools: ['Git', 'GitHub', 'Linux / Ubuntu', 'VS Code', 'Jupyter', 'LaTeX', 'Overleaf']
  },

  talksPosters: [] as TalkPoster[]
};
