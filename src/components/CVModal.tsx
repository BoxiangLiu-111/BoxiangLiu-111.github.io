import React from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, Award, BookOpen, FileText, Code2, Briefcase } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const cvText = `=====================================================
CURRICULUM VITAE - BOXIANG LIU (刘博翔)
Public Version (Contact: boxiangliu17@gmail.com)
Hunan University of Science and Technology, Xiangtan, Hunan, China
=====================================================

EDUCATION
-----------------------------------------------------
Hunan University of Science and Technology (HNUST) (09/2023 – 06/2027 Expected)
Bachelor of Engineering in Automation | Xiangtan, Hunan, China
- Advisor: Prof. Chaoyang Chen (IET Fellow)
- Core Courses: Artificial Intelligence, Data Structures & Algorithms, Operations Research and Optimisation, Principles of Automatic Control, Discrete Mathematics, Microcontroller Technology.

RESEARCH INTERESTS
-----------------------------------------------------
- Computational and Biomedical Imaging
- Physics-Guided Machine Learning and Inverse Problems
- Intelligent Sensing and Condition Monitoring

PUBLICATIONS
-----------------------------------------------------
1. VascHAT: A Vascular-Structure-Aware Hybrid Attention Framework for Sparsely Sampled Photoacoustic Microscopy Reconstruction
   Authors: Boxiang Liu, Jie Deng, Jiayi Wang, Chaoyang Chen, Sung-liang Chen, and Siqi Liang*
   Venue: Knowledge-Based Systems | Status: Under Review (First Author)
   Code: https://github.com/BoxiangLiu-111/VascHAT

2. Healthy State Referenced Transfer Residuals Between Sensors for Variable Speed Wind Turbine Drivetrain Monitoring
   Authors: Boxiang Liu, Jiayi Wang, Jie Deng, Chaoyang Chen, and Siqi Liang*
   Venue: IEEE Transactions on Instrumentation and Measurement | Status: Under Review (First Author)
   Code: https://github.com/BoxiangLiu-111/CG-COTR

3. Counterfactual Stage Supervision and Privileged Depth Distillation for Single RGB Through-Water Image Restoration
   Authors: Siqi Liang, Boxiang Liu, Jiayi Wang, Chaoyang Chen*
   Venue: Acta Automatica Sinica (自动化学报) | Status: Under Review (Student Second Author; Supervisor First Author)
   Code: https://github.com/BoxiangLiu-111/CFRR

4. Restoration of Out-of-Focus Region for Photoacoustic Endoscopic Imaging Enabled by Convolutional Neural Networks
   Authors: Siqi Liang*, Boxiang Liu, Chaoyang Chen, Mingyang Lv, Yue Hu, Qingshan Liu, Sung-Liang Chen*, Myeongsu Seong*
   Venue: Physica Scripta, Vol. 101, No. 2, 216005, 2026. Published. (Second Author)
   DOI: 10.1088/1402-4896/ae6ad2

RESEARCH EXPERIENCES
-----------------------------------------------------
1. Key Laboratory of Intelligent Control & Maintenance for Complex Systems (09/2024 – 08/2026)
   Undergraduate Researcher | Advisor: Dr. Siqi Liang
   Research: Deep Learning for Photoacoustic Microscopy (PAM/PAE) Super-Resolution & Restoration

2. Marine Intelligent Detection & Control Team (12/2025 – 06/2027)
   Undergraduate Researcher | Advisors: Dr. Siqi Liang, Prof. Chaoyang Chen
   Research: Marine Perception, Multisensor Sensing, and Wind Turbine Drivetrain Monitoring

ENGINEERING & INDUSTRY PROJECTS
-----------------------------------------------------
1. Intelligent Computer Vision Inspection System for Combined Paper-Tube Fireworks Assembly (组合纸筒烟花组装的智能视觉检测系统) (06/2025 – 05/2026)
   Project Lead & Core Developer | Industry Commissioned by Hunan Liuyang Maiminte Technology Co., Ltd. (Delivered)
   - Constructed a 4,000-image factory-floor dataset covering fuse, inner-tube, paper, and powder anomaly detection.
   - Tailored YOLOv8 with CBAM attention, BiFPN feature fusion, and MobileNetV4; improved mAP@0.5 by ~35% (1.5x baseline).
   - Applied pruning, distillation, and INT8 quantization; accelerated via TensorRT/OpenVINO/Intel NCS2; deployed on RK3588 and Orange Pi 5 Plus with Hikvision MV-CH250 industrial camera and Qt interface for handheld production-line defect inspection.

2. Cloud–Edge Collaborative Multimodal Road-Defect Detection System (12/2024 – 04/2025)
   Project & Algorithm Lead | China Undergraduate Computer Design Contest (Regional 2nd Prize)
   - Developed cloud-edge defect inspection pipeline on YOLO11 with Raspberry Pi 4B and cloud 3D rendering.

PATENT APPLICATIONS
-----------------------------------------------------
1. Chinese Invention Patent: Water Surface Distance Surveying Instrument for Marine Engineering Surveying and Mapping (海洋工程测绘用水上距离勘测仪)
   Application No. 202511822593.4 (Filed Dec 04, 2025)
   Inventors: S. Liang, B. Liu, C. Chen, S. Hu, Z. Zou | Status: Under examination (Accepted)

2. Chinese Utility Model: A Photoacoustic Imaging-Based Corrosion Detection System for Subsea Pipeline Networks (一种基于光声成像的海底管网腐蚀检测系统)
   Application No. 202522329784.9 (Filed Nov 03, 2025)
   Inventors: S. Liang, B. Liu, C. Chen, X. Zhao, J. Wang | Status: Under examination (Accepted)

3. Chinese Utility Model: A Novel FPGA-Controlled Small Submarine Subsea Natural Gas Survey System (一种新型基于 FPGA 控制的小型潜水艇海底天然气勘测系统)
   Application No. 202522276148.4 (Filed Oct 27, 2025)
   Inventors: J. Wang, S. Liang, C. Chen, B. Liu, X. Zhao | Status: Under examination (Accepted)

4. Chinese Utility Model: A Photoacoustic Remote-Sensing Imaging System for Monitoring Brain-Computer Interface Electrode Implantation (一种用于监测脑机接口电极植入的光声遥感成像系统)
   Application No. 202522269509.2 (Filed Oct 27, 2025)
   Inventors: S. Liang, B. Liu, C. Chen, P. Tang, Z. Zou | Status: Under preliminary examination

5. Chinese Invention Patent: A Non-Invasive Stent Monitoring Method Based on Acoustic-Resolution Photoacoustic Microscopy (一种基于声学分辨率光声显微成像的无创支架监测方法)
   Application No. 202511474604.4 (Filed Oct 15, 2025)
   Inventors: S. Liang, B. Liu, C. Chen, F. Chen, Q. Liu | Status: Under substantive examination

SELECTED AWARDS & HONORS
-----------------------------------------------------
- First Prize, Hunan Provincial Undergraduate Statistical Modelling Competition (2025)
- Second Prize, China Undergraduate Mathematical Contest in Modeling (Hunan Division, 2025)
- Second Prize, China Undergraduate Computer Design Contest (Central South Regional, 2025)
- Second Prize, China Collegiate Computing Competition AI Challenge (Central South Regional, 2025)
- Third Prize, Hunan Provincial Undergraduate IoT Innovation and Design Competition (2025)
- First-Class Comprehensive Scholarship (2024–2025)
- Outstanding Individual in Academic Research (2025)
- Outstanding Student, Student Leader, Communist Youth League Member (2025)

SKILLS
-----------------------------------------------------
- Programming: Python, MATLAB, PyTorch, OpenCV, NumPy, SciPy, Pandas, scikit-learn, Matplotlib, CUDA, C
- Research Methods: Deep learning, computer vision, medical image reconstruction, object detection, mathematical modelling
- Embedded: Raspberry Pi 4B, STM32, camera calibration, pose estimation, sensing systems
- Tools: Git, GitHub, Linux, VS Code, Jupyter Notebook, LaTeX, Overleaf

REFEREES
-----------------------------------------------------
1. Professor Chaoyang Chen (IET Fellow)
   Dean, School of Information and Electrical Engineering, Hunan University of Science and Technology
   Recipient of the NSFC Excellent Young Scientists Fund
   Relationship: Research Supervisor

2. Dr. Siqi Liang
   Lecturer, Hunan Provincial Key Laboratory of Intelligent Control and Maintenance for Complex Systems, HNUST
   Relationship: Research Supervisor
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Boxiang_Liu_CV_Public.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 z-10 sticky top-0">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
              {lang === 'zh' ? '公开规范版 CV' : 'Public Official CV'}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              {lang === 'zh' ? '(隐私安全处理：已去除个人电话与导师私人邮箱)' : '(Privacy-safe: phone & supervisor personal emails omitted)'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '打印 / 存为 PDF' : 'Print / PDF'}</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              title="Download text format"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '下载文本版' : 'Download TXT'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-serif text-slate-800 dark:text-slate-200 print:p-0 print:m-0 print:text-black">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
              Boxiang Liu (刘博翔)
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-sans">
              Xiangtan, Hunan, China · Hunan University of Science and Technology
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-3 text-xs text-slate-600 dark:text-slate-400 font-sans">
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>boxiangliu17@gmail.com</span>
              </span>
              <span className="flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>GitHub: BoxiangLiu-111</span>
              </span>
              <span className="flex items-center space-x-1">
                <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>ORCID: 0009-0004-4755-0656</span>
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-blue-900 pb-1 mb-3 font-sans">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-base text-slate-900 dark:text-white">
                Hunan University of Science and Technology (HNUST)
              </span>
              <span className="text-xs font-mono text-slate-500">09/2023 – 06/2027 (Expected)</span>
            </div>
            <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300 italic">
              <span>Bachelor of Engineering in Automation</span>
              <span>Xiangtan, Hunan, China</span>
            </div>
            <ul className="list-disc list-inside mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>
                <strong>Research Advisor:</strong> Prof. Chaoyang Chen (IET Fellow / NSFC Excellent Young Scientists Fund recipient)
              </li>
              <li>
                <strong>Core Courses:</strong> Artificial Intelligence, Data Structures & Algorithms, Operations Research and Optimisation, Principles of Automatic Control, Discrete Mathematics, Microcontroller Technology.
              </li>
            </ul>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-blue-900 pb-1 mb-3 font-sans">
              Publications
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-blue-500 pl-3 py-0.5">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  VascHAT: A Vascular-Structure-Aware Hybrid Attention Framework for Sparsely Sampled Photoacoustic Microscopy Reconstruction
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">
                  <strong className="underline text-slate-900 dark:text-white">Boxiang Liu</strong>, Jie Deng, Jiayi Wang, Chaoyang Chen, Sung-liang Chen, and Siqi Liang*
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-sans mt-0.5">
                  <em>Knowledge-Based Systems</em> | Under Review | <strong>First Author</strong> | GitHub: BoxiangLiu-111/VascHAT
                </p>
              </div>

              <div className="border-l-2 border-blue-500 pl-3 py-0.5">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Healthy State Referenced Transfer Residuals Between Sensors for Variable Speed Wind Turbine Drivetrain Monitoring
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">
                  <strong className="underline text-slate-900 dark:text-white">Boxiang Liu</strong>, Jiayi Wang, Jie Deng, Chaoyang Chen, and Siqi Liang*
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-sans mt-0.5">
                  <em>IEEE Transactions on Instrumentation and Measurement</em> | Under Review | <strong>First Author</strong> | GitHub: BoxiangLiu-111/CG-COTR
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3 py-0.5">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Counterfactual Stage Supervision and Privileged Depth Distillation for Single RGB Through-Water Image Restoration (基于反事实分阶段监督与特权深度蒸馏的单幅RGB透水图像复原)
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">
                  Siqi Liang, <strong className="underline text-slate-900 dark:text-white">Boxiang Liu</strong>, Jiayi Wang, Chaoyang Chen*
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-sans mt-0.5">
                  <em>Acta Automatica Sinica (自动化学报)</em> | Under Review | <strong>Student Second Author; Supervisor First Author</strong> | GitHub: BoxiangLiu-111/CFRR
                </p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3 py-0.5">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Restoration of Out-of-Focus Region for Photoacoustic Endoscopic Imaging Enabled by Convolutional Neural Networks
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">
                  Siqi Liang*, <strong className="underline text-slate-900 dark:text-white">Boxiang Liu</strong>, Chaoyang Chen, Mingyang Lv, Yue Hu, Qingshan Liu, Sung-Liang Chen*, Myeongsu Seong*
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-sans mt-0.5">
                  <em>Physica Scripta</em>, Vol. 101, No. 2, Art. 216005, 2026. | <strong>Published · Second Author</strong> | DOI: 10.1088/1402-4896/ae6ad2
                </p>
              </div>
            </div>
          </div>

          {/* Research Experience */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-blue-900 pb-1 mb-3 font-sans">
              Research Experience
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    Photoacoustic Microscopy Reconstruction & Restoration Research
                  </span>
                  <span className="text-xs font-mono text-slate-500">2024.09 – 2026.08</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                  Key Laboratory of Intelligent Control & Maintenance | Advisor: Dr. Siqi Liang
                </p>
                <ul className="list-disc list-inside mt-1.5 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Formulated sparse-sampling PAM reconstruction as a structure-preserving inverse problem and developed VascHAT.</li>
                  <li>Implemented CNN-based restoration for out-of-focus photoacoustic endoscopic images; benchmarked FFA, RCA, EDSR, RRDB against deconvolution.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    Marine Perception, Multisensor Sensing, and Condition Monitoring
                  </span>
                  <span className="text-xs font-mono text-slate-500">2025.12 – 2027.06</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                  Marine Intelligent Detection & Control Team | Advisors: Dr. Siqi Liang, Prof. Chaoyang Chen
                </p>
                <ul className="list-disc list-inside mt-1.5 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Formulated coherence-gated complex order-transfer residuals (CG-COTR) across physically connected sensors for variable-speed drivetrains.</li>
                  <li>Contributed to CFRR counterfactual stage supervision and privileged depth distillation for through-water aerial RGB imagery.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Engineering Projects & Industry Experience */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-blue-900 pb-1 mb-3 font-sans">
              Engineering & Industry Projects
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    Intelligent Computer Vision Inspection System for Combined Paper-Tube Fireworks Assembly (组合纸筒烟花组装的智能视觉检测系统)
                  </span>
                  <span className="text-xs font-mono text-slate-500">2025.06 – 2026.05</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                  Project Lead / Core Developer | Industry Commissioned by Hunan Liuyang Maiminte Technology Co., Ltd. (Delivered)
                </p>
                <ul className="list-disc list-inside mt-1.5 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Constructed a 4,000-image real-world factory dataset covering fuse, inner-tube, paper, and powder anomaly detection.</li>
                  <li>Tailored YOLOv8 with CBAM attention, BiFPN feature fusion, and MobileNetV4; improved mAP@0.5 by ~35% (1.5x baseline).</li>
                  <li>Applied pruning, distillation, and INT8 quantization; accelerated via TensorRT/OpenVINO/Intel NCS2; deployed on RK3588 and Orange Pi 5 Plus with Hikvision MV-CH250 industrial camera and custom Qt interface for handheld production-line defect inspection.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    Cloud–Edge Collaborative Multimodal Road-Defect Detection and Visualisation System
                  </span>
                  <span className="text-xs font-mono text-slate-500">2024.12 – 2025.04</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                  Project Lead & Algorithm Lead | China Undergraduate Computer Design Contest (Regional 2nd Prize)
                </p>
                <ul className="list-disc list-inside mt-1.5 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Designed end-to-end cloud-edge defect inspection pipeline on YOLO11 with Raspberry Pi 4B hardware and cloud 3D rendering.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Patent Applications */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-blue-900 pb-1 mb-3 font-sans">
              Patent Applications (5)
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  1. Water Surface Distance Surveying Instrument for Marine Engineering Surveying and Mapping (海洋工程测绘用水上距离勘测仪)
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                  Chinese Invention Patent Application No. 202511822593.4, filed Dec 04, 2025. Status: Under examination (Accepted).
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  2. A Photoacoustic Imaging-Based Corrosion Detection System for Subsea Pipeline Networks (一种基于光声成像的海底管网腐蚀检测系统)
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                  Chinese Utility Model Patent Application No. 202522329784.9, filed Nov 03, 2025. Status: Under examination (Accepted).
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  3. A Novel FPGA-Controlled Small Submarine Subsea Natural Gas Survey System (一种新型基于 FPGA 控制的小型潜水艇海底天然气勘测系统)
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                  Chinese Utility Model Patent Application No. 202522276148.4, filed Oct 27, 2025. Status: Under examination (Accepted).
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  4. A Photoacoustic Remote-Sensing Imaging System for Monitoring Brain–Computer Interface Electrode Implantation (一种用于监测脑机接口电极植入的光声遥感成像系统)
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                  Chinese Utility Model Patent Application No. 202522269509.2, filed Oct 27, 2025. Status: Under preliminary examination.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  5. A Non-Invasive Stent Monitoring Method Based on Acoustic-Resolution Photoacoustic Microscopy (一种基于声学分辨率光声显微成像的无创支架监测方法)
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                  Chinese Invention Patent Application No. 202511474604.4, filed Oct 15, 2025. Status: Under substantive examination.
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-blue-900 pb-1 mb-3 font-sans">
              Honors & Student Awards
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>First Prize, Hunan Undergraduate Statistical Modelling Competition</span>
                <span className="font-mono text-slate-500">2025</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>Second Prize, Mathematical Contest in Modeling (Hunan)</span>
                <span className="font-mono text-slate-500">2025</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>Second Prize, China Undergraduate Computer Design Contest</span>
                <span className="font-mono text-slate-500">2025</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>Second Prize, China Collegiate Computing Competition AI Challenge</span>
                <span className="font-mono text-slate-500">2025</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>Third Prize, Hunan Undergraduate IoT Innovation Competition</span>
                <span className="font-mono text-slate-500">2025</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>First-Class Comprehensive Scholarship</span>
                <span className="font-mono text-slate-500">2024–2025</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>Outstanding Individual in Academic Research</span>
                <span className="font-mono text-slate-500">2025</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>Outstanding Student & Student Leader & CYL Member</span>
                <span className="font-mono text-slate-500">2025</span>
              </div>
            </div>
          </div>

          {/* Referees */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 border-b border-blue-200 dark:border-blue-900 pb-1 mb-3 font-sans">
              Referees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200 dark:border-slate-700/60">
                <p className="font-bold text-slate-900 dark:text-white">Professor Chaoyang Chen, IET Fellow</p>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5">Dean, School of Information and Electrical Engineering, HNUST</p>
                <p className="text-slate-500 dark:text-slate-400">Recipient of the NSFC Excellent Young Scientists Fund</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">Relationship: Research Supervisor</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200 dark:border-slate-700/60">
                <p className="font-bold text-slate-900 dark:text-white">Dr. Siqi Liang</p>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5">Lecturer, School of Information and Electrical Engineering, HNUST</p>
                <p className="text-slate-500 dark:text-slate-400">Hunan Provincial Key Lab of Intelligent Control & Maintenance</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">Relationship: Research Supervisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
