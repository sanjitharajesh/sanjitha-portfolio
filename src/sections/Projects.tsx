export default function Projects() {
  return (
    <>
      <h2 id="projects" className="font-mono font-bold text-[clamp(22px,3.2vw,30px)] mt-16 md:mt-64 scroll-mt-36 text-center">
        Projects
      </h2>
      <section className="grid gap-3 mt-4">
        {/* MediQuery */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-mono font-semibold text-[16px]">MediQuery: Context-Aware Medication Assistant Using Local LLMs + RAG (in progress)</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Jun – Aug 2025</span>
          </div>
          <p className="mt-3">Building a privacy-first FDA drug-guide Q&amp;A: local LLM (Mistral-7B) + RAG (ChromaDB), PyMuPDF ingestion, FastAPI endpoints, Docker deployment, SQLite storage.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {["Mistral-7B","RAG","ChromaDB","PyMuPDF","FastAPI","Docker","SQLite"].map(t => (
              <span key={t} className="font-mono text-[12px] font-bold border-2 border-border rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </article>

        {/* EfficientNet */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-mono font-semibold text-[16px]">Transfer Learning on Chest X-rays with EfficientNet</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Feb – May 2025</span>
          </div>
          <p className="mt-3">Fine-tuned EfficientNet-B0 on 5k+ chest X-rays with dataset-specific transfer learning and domain adaptation (DANN)—using selective layer unfreezing, label smoothing, threshold tuning, and targeted augmentation—achieving 92% pneumonia and 95% TB accuracy.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {["EfficientNet-B0","PyTorch","DANN"].map(t => (
              <span key={t} className="font-mono text-[12px] font-bold border-2 border-border rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </article>

        {/* World Happiness */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-mono font-semibold text-[16px]">World Happiness Level Prediction</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Oct – Dec 2024</span>
          </div>
          <p className="mt-3">Designed a prediction system by comparing the performance of Random Forest Regression and XGBoost models, using a dataset with 2,350 records. The final hybrid model obtained a mean squared error of 0.24492, outperforming individual models.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {["Random Forest","XGBoost","Regression","Python"].map(t => (
              <span key={t} className="font-mono text-[12px] font-bold border-2 border-border rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </article>

        {/* Somnisage */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-mono font-semibold text-[16px]">Somnisage — AI-based Sleep Stage Scoring (Capstone Project)</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Jan – May 2024</span>
          </div>
          <p className="mt-3">Designed and trained a sleep-stage pipeline on Sleep-EDF (197 PSGs) using twin CNN and CNN+BiLSTM; applied EEG filtering/feature engineering in TensorFlow/Keras; achieved 82% (CNN) and 84% (BiLSTM).</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {["TensorFlow","Keras"].map(t => (
              <span key={t} className="font-mono text-[12px] font-bold border-2 border-border rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </article>

        {/* Air Quality */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-mono font-semibold text-[16px]">Air Quality Vis</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Oct – Dec 2023</span>
          </div>
          <p className="mt-3">Analyzed 60k+ air-quality records (2010–2023; 50+ Indian cities) and shipped an interactive R Flexdashboard (ggplot2, Plotly, dplyr) highlighting PM2.5/NO2/SO2 trends, including a ~30% PM2.5 rise in metros.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {["R","Plotly","ggplot2"].map(t => (
              <span key={t} className="font-mono text-[12px] font-bold border-2 border-border rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </article>

        {/* GestuRise */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-mono font-semibold text-[16px]">GestuRise — Hand Gesture Control</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Jun – Jul 2023</span>
          </div>
          <p className="mt-3">Engineered a real-time gesture-control system with MediaPipe landmarks + TensorFlow keypoint classifier (88%); integrated OpenCV/PyAutoGUI for slide/screen control, improving live-session interaction by 35%.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {["MediaPipe","TensorFlow","OpenCV","PyAutoGUI"].map(t => (
              <span key={t} className="font-mono text-[12px] font-bold border-2 border-border rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </article>

        {/* JPEG Error */}
        <article className="bg-bg border border-border rounded-2xl p-4 shadow-soft">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-mono font-semibold text-[16px]">JPEG Error Analysis</h3>
            <span className="font-mono text-[13px] font-semibold opacity-90 whitespace-nowrap">Dec 2022 – Apr 2023</span>
          </div>
          <p className="mt-3">Implemented JPEG compression error analysis (DCT/quantization) with OpenCV/NumPy; computed MSE/PSNR/SSIM and visualized recompression trends in Matplotlib, achieving a 3% false-positive rate.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {["OpenCV","NumPy","Matplotlib"].map(t => (
              <span key={t} className="font-mono text-[12px] font-bold border-2 border-border rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
