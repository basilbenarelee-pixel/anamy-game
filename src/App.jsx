import React, { useState, useEffect, useMemo } from 'react';
import {
  Bone,
  Brain,
  Shield,
  Hand,
  Footprints,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  Clock,
  User,
  History,
  Play,
  Copy,
  ShieldCheck,
  Home,
  ArrowLeft,
  Sparkles,
  Lock,
  ListOrdered,
  Type,
  Link2
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot,
  collection
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbjoACLsTE9cNLC2Yapiwpusasmvk3Ts4",
  authDomain: "anamy-game.firebaseapp.com",
  projectId: "anamy-game",
  storageBucket: "anamy-game.firebasestorage.app",
  messagingSenderId: "636328473455",
  appId: "1:636328473455:web:0c342767eca09ed5e96e9a",
  measurementId: "G-HGR6KHMVQ0"
};

const firebaseReady = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
const appId = firebaseConfig.projectId || 'anamy-game-local';
const app = firebaseReady ? initializeApp(firebaseConfig) : null;
const auth = firebaseReady ? getAuth(app) : null;
const db = firebaseReady ? getFirestore(app) : null;

// ==========================================
// 1. COMPLETE BONE DATA
// ==========================================
const BONE_DATA = [
  // --- 1. HEAD (15 items) ---
  { id: 'head-1', category: 'Head', num: 1, nameEn: 'Sphenoid', imageUrl: '/bones/Head/IMG_2251.PNG', viewType: 'head-lateral', svgTarget: 'sphenoid' },
  { id: 'head-2', category: 'Head', num: 2, nameEn: 'Ethmoid', imageUrl: '/bones/Head/IMG_2252.PNG', viewType: 'head-anterior', svgTarget: 'ethmoid' },
  { id: 'head-3', category: 'Head', num: 3, nameEn: 'Maxilla', imageUrl: '/bones/Head/IMG_2254.PNG', viewType: 'head-anterior', svgTarget: 'maxillary' },
  { id: 'head-4', category: 'Head', num: 4, nameEn: 'Zygomatic', imageUrl: '/bones/Head/IMG_2255.PNG', viewType: 'head-anterior', svgTarget: 'zygomatic' },
  { id: 'head-5', category: 'Head', num: 5, nameEn: 'Mandible', imageUrl: '/bones/Head/IMG_2256.PNG', viewType: 'head-anterior', svgTarget: 'mandible' },
  { id: 'head-6', category: 'Head', num: 6, nameEn: 'Frontal', imageUrl: '/bones/Head/IMG_2257.PNG', viewType: 'head-anterior', svgTarget: 'frontal' },
  { id: 'head-7', category: 'Head', num: 7, nameEn: 'Temporal', imageUrl: '/bones/Head/IMG_2258.PNG', viewType: 'head-lateral', svgTarget: 'temporal' },
  { id: 'head-8', category: 'Head', num: 8, nameEn: 'Parietal', imageUrl: '/bones/Head/IMG_2259.PNG', viewType: 'head-lateral', svgTarget: 'parietal' },
  { id: 'head-9', category: 'Head', num: 9, nameEn: 'Occipital', imageUrl: '/bones/Head/IMG_2260.PNG', viewType: 'head-lateral', svgTarget: 'occipital' },
  { id: 'head-10', category: 'Head', num: 10, nameEn: 'Hyoid', imageUrl: '/bones/Head/IMG_2261.PNG', viewType: 'head-anterior', svgTarget: 'hyoid' },
  { id: 'head-11', category: 'Head', num: 11, nameEn: 'Nasal', imageUrl: '/bones/Head/IMG_2263.PNG', viewType: 'head-inferior', svgTarget: 'nasal' },
  { id: 'head-12', category: 'Head', num: 12, nameEn: 'Vomer', imageUrl: '/bones/Head/IMG_2264.PNG', viewType: 'head-anterior', svgTarget: 'vomer' },
  { id: 'head-13', category: 'Head', num: 13, nameEn: 'Lacrimal', imageUrl: '/bones/Head/IMG_2268.PNG', viewType: 'head-anterior', svgTarget: 'lacrimal' },
  { id: 'head-14', category: 'Head', num: 14, nameEn: 'Nasal concha(turbinate)', imageUrl: '/bones/Head/IMG_2269.PNG', viewType: 'head-anterior', svgTarget: 'concha' },
  { id: 'head-15', category: 'Head', num: 15, nameEn: 'Palatine', imageUrl: '/bones/Head/IMG_2270.PNG', viewType: 'head-anterior', svgTarget: 'palatine' },

  // --- 2. THORACIC TRUNK (10 items) ---
  { id: 'thoracic trunk-1', category: 'Thoracic trunk', num: 1, nameEn: 'Sacrum', imageUrl: '/bones/Thoracic trunk/IMG_3984.PNG', viewType: 'thoracic trunk', svgTarget: 'sacrum' },
  { id: 'thoracic trunk-2', category: 'Thoracic trunk', num: 2, nameEn: 'Hip Bone', imageUrl: '/bones/Thoracic trunk/IMG_3986.PNG', viewType: 'thoracic trunk', svgTarget: 'hips' },
  { id: 'thoracic trunk-3', category: 'Thoracic trunk', num: 3, nameEn: 'Clavicles', imageUrl: '/bones/Thoracic trunk/IMG_3987.PNG', viewType: 'thoracic trunk', svgTarget: 'clavicles' },
  { id: 'thoracic trunk-4', category: 'Thoracic trunk', num: 4, nameEn: 'Scapula', imageUrl: '/bones/Thoracic trunk/IMG_3989.PNG', viewType: 'thoracic trunk', svgTarget: 'scapulae' },
  { id: 'thoracic trunk-5', category: 'Thoracic trunk', num: 5, nameEn: 'Sternum', imageUrl: '/bones/Thoracic trunk/IMG_4022.PNG', viewType: 'thoracic trunk', svgTarget: 'sternum' },
  { id: 'thoracic trunk-6', category: 'Thoracic trunk', num: 6, nameEn: 'Cervical vertebrae', imageUrl: '/bones/Thoracic trunk/IMG_4036.PNG', viewType: 'thoracic trunk', svgTarget: 'cervical' },
  { id: 'thoracic trunk-7', category: 'Thoracic trunk', num: 7, nameEn: 'Thoracic vertebrae', imageUrl: '/bones/Thoracic trunk/IMG_4037.PNG', viewType: 'thoracic trunk', svgTarget: 'thoracic' },
  { id: 'thoracic trunk-8', category: 'Thoracic trunk', num: 8, nameEn: 'Lumbar vertebrae', imageUrl: '/bones/Thoracic trunk/IMG_4039.PNG', viewType: 'thoracic trunk', svgTarget: 'lumbar' },
  { id: 'thoracic trunk-9', category: 'Thoracic trunk', num: 9, nameEn: 'Coccyx', imageUrl: '/bones/Thoracic trunk/IMG_4041.PNG', viewType: 'thoracic trunk', svgTarget: 'coccyx' },
  { id: 'thoracic trunk-10', category: 'Thoracic trunk', num: 10, nameEn: 'Ribs', imageUrl: '/bones/Thoracic trunk/IMG_4042.PNG', viewType: 'thoracic trunk', svgTarget: 'ribs' },

  // --- 3. UPPER (15 items) ---
  { id: 'upper-1', category: 'Upper', num: 1, nameEn: 'Humerus', imageUrl: '/bones/Upper/IMG_3990.PNG', viewType: 'upper-arm', svgTarget: 'humerus' },
  { id: 'upper-2', category: 'Upper', num: 2, nameEn: 'Radius', imageUrl: '/bones/Upper/IMG_3991.PNG', viewType: 'upper-arm', svgTarget: 'radius' },
  { id: 'upper-3', category: 'Upper', num: 3, nameEn: 'Ulna', imageUrl: '/bones/Upper/IMG_3992.PNG', viewType: 'upper-arm', svgTarget: 'ulna' },
  { id: 'upper-4', category: 'Upper', num: 4, nameEn: 'Metacarpal', imageUrl: '/bones/Upper/IMG_4001.PNG', viewType: 'upper-hand', svgTarget: 'metacarpals' },
  { id: 'upper-5', category: 'Upper', num: 5, nameEn: 'Proximal phalanx', imageUrl: '/bones/Upper/IMG_4002.PNG', viewType: 'upper-hand', svgTarget: 'proximal-phalanges' },
  { id: 'upper-6', category: 'Upper', num: 6, nameEn: 'Middle phalanx', imageUrl: '/bones/Upper/IMG_4003.PNG', viewType: 'upper-hand', svgTarget: 'middle-phalanges' },
  { id: 'upper-7', category: 'Upper', num: 7, nameEn: 'Distal phalanx', imageUrl: '/bones/Upper/IMG_4005.PNG', viewType: 'upper-hand', svgTarget: 'distal-phalanges' },
  { id: 'upper-8', category: 'Upper', num: 8, nameEn: 'Trapezium', imageUrl: '/bones/Upper/IMG_4023.PNG', viewType: 'upper-hand', svgTarget: 'trapezium' },
  { id: 'upper-9', category: 'Upper', num: 9, nameEn: 'Trapezoid', imageUrl: '/bones/Upper/IMG_4024.PNG', viewType: 'upper-hand', svgTarget: 'trapezoid' },
  { id: 'upper-10', category: 'Upper', num: 10, nameEn: 'Capitate', imageUrl: '/bones/Upper/IMG_4025.PNG', viewType: 'upper-hand', svgTarget: 'capitate' },
  { id: 'upper-11', category: 'Upper', num: 11, nameEn: 'Hamate', imageUrl: '/bones/Upper/IMG_4026.PNG', viewType: 'upper-hand', svgTarget: 'hamate' },
  { id: 'upper-12', category: 'Upper', num: 12, nameEn: 'Scaphoid', imageUrl: '/bones/Upper/IMG_4027.PNG', viewType: 'upper-hand', svgTarget: 'scaphoid' },
  { id: 'upper-13', category: 'Upper', num: 13, nameEn: 'Lunate', imageUrl: '/bones/Upper/IMG_4028.PNG', viewType: 'upper-hand', svgTarget: 'lunate' },
  { id: 'upper-14', category: 'Upper', num: 14, nameEn: 'Triquetrum', imageUrl: '/bones/Upper/IMG_4029.PNG', viewType: 'upper-hand', svgTarget: 'triquetrum' },
  { id: 'upper-15', category: 'Upper', num: 15, nameEn: 'Pisiform', imageUrl: '/bones/Upper/IMG_4030.PNG', viewType: 'upper-hand', svgTarget: 'pisiform' },

  // --- 4. LOWER (15 items) ---
  { id: 'lower-1', category: 'Lower', num: 1, nameEn: 'Talus', imageUrl: '/bones/Lower/IMG_4011.PNG', viewType: 'lower-foot', svgTarget: 'talus' },
  { id: 'lower-2', category: 'Lower', num: 2, nameEn: 'Calcaneus', imageUrl: '/bones/Lower/IMG_4012.PNG', viewType: 'lower-foot', svgTarget: 'calcaneus' },
  { id: 'lower-3', category: 'Lower', num: 3, nameEn: 'Navicular', imageUrl: '/bones/Lower/IMG_4013.PNG', viewType: 'lower-foot', svgTarget: 'navicular' },
  { id: 'lower-4', category: 'Lower', num: 4, nameEn: 'Cuboid', imageUrl: '/bones/Lower/IMG_4014.PNG', viewType: 'lower-foot', svgTarget: 'cuboid' },
  { id: 'lower-5', category: 'Lower', num: 5, nameEn: 'Lateral cuneiform', imageUrl: '/bones/Lower/IMG_4015.PNG', viewType: 'lower-foot', svgTarget: 'lateral-cuneiform' },
  { id: 'lower-6', category: 'Lower', num: 6, nameEn: 'Intermediate cuneiform', imageUrl: '/bones/Lower/IMG_4016.PNG', viewType: 'lower-foot', svgTarget: 'intermediate-cuneiform' },
  { id: 'lower-7', category: 'Lower', num: 7, nameEn: 'Medial cuneiform', imageUrl: '/bones/Lower/IMG_4017.PNG', viewType: 'lower-foot', svgTarget: 'medial-cuneiform' },
  { id: 'lower-8', category: 'Lower', num: 8, nameEn: 'Metatarsals', imageUrl: '/bones/Lower/IMG_4018.PNG', viewType: 'lower-foot', svgTarget: 'metatarsals' },
  { id: 'lower-9', category: 'Lower', num: 9, nameEn: 'Proximal phalanx', imageUrl: '/bones/Lower/IMG_4019.PNG', viewType: 'lower-foot', svgTarget: 'foot-proximal-phalanges' },
  { id: 'lower-10', category: 'Lower', num: 10, nameEn: 'Distal phalanx', imageUrl: '/bones/Lower/IMG_4020.PNG', viewType: 'lower-foot', svgTarget: 'foot-distal-phalanges' },
  { id: 'lower-11', category: 'Lower', num: 11, nameEn: 'Middle phalanges', imageUrl: '/bones/Lower/IMG_4021.PNG', viewType: 'lower-foot', svgTarget: 'foot-middle-phalanges' },
  { id: 'lower-12', category: 'Lower', num: 12, nameEn: 'Femur', imageUrl: '/bones/Lower/IMG_4031.PNG', viewType: 'lower-leg', svgTarget: 'femora' },
  { id: 'lower-13', category: 'Lower', num: 13, nameEn: 'Patellae', imageUrl: '/bones/Lower/IMG_4032.PNG', viewType: 'lower-leg', svgTarget: 'patellae' },
  { id: 'lower-14', category: 'Lower', num: 14, nameEn: 'Tibia', imageUrl: '/bones/Lower/IMG_4033.PNG', viewType: 'lower-leg', svgTarget: 'tibiae' },
  { id: 'lower-15', category: 'Lower', num: 15, nameEn: 'Fibula', imageUrl: '/bones/Lower/IMG_4034.PNG', viewType: 'lower-leg', svgTarget: 'fibula' }
];

const CATEGORIES = [
  { id: 'All', nameEn: 'All Bones', nameTh: 'รวมทั้งหมดทุกส่วน', icon: Bone, desc: 'ทดสอบครบทุกส่วนของร่างกายในรอบเดียว' },
  { id: 'Head', nameEn: 'Head', nameTh: 'กะโหลกศีรษะ', icon: Brain, desc: 'กระดูกหุ้มสมอง กระดูกใบหน้า และกระดูกโคนลิ้น' },
  { id: 'Thoracic trunk', nameEn: 'Thoracic trunk', nameTh: 'แกนกลางลำตัว', icon: Shield, desc: 'กระดูกสันหลัง กระดูกอก ซี่โครง ไหปลาร้า สะบัก และเชิงกราน' },
  { id: 'Upper', nameEn: 'Upper', nameTh: 'รยางค์ส่วนบน', icon: Hand, desc: 'กระดูกต้นแขน ปลายแขน ข้อมือ ฝ่ามือ และนิ้วมือ' },
  { id: 'Lower', nameEn: 'Lower', nameTh: 'รยางค์ส่วนล่าง', icon: Footprints, desc: 'กระดูกต้นขา สะบ้า หน้าแข้ง น่อง ข้อเท้า ฝ่าเท้า และนิ้วเท้า' },
];

// Helper for smart grading in fill-in-the-blank (checks exact core bone name inside user input)
const evaluateFillAnswer = (userAnswer, correctName) => {
  if (!userAnswer) return false;
  const cleanUser = userAnswer.trim().toLowerCase();
  const cleanCorrect = correctName.trim().toLowerCase();
  
  if (cleanUser === cleanCorrect) return true;
  const regex = new RegExp(`\\b${cleanCorrect}\\b`, 'i');
  return regex.test(cleanUser);
};

// ==========================================
// 2. MAIN APPLICATION
// ==========================================
export default function App() {
  const [screen, setScreen] = useState('home');
  const [selectedHomeMenu, setSelectedHomeMenu] = useState(null);

  const [user, setUser] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [nameInputError, setNameInputError] = useState(false);
  const [scoreHistory, setScoreHistory] = useState([]);

  // Setup Quiz States
  const [setupStep, setSetupStep] = useState(1);
  const [examMode, setExamMode] = useState('mcq');
  const [quizCategory, setQuizCategory] = useState('Head');

  const [quizPool, setQuizPool] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionOptionsMap, setQuestionOptionsMap] = useState({});
  const [answersMap, setAnswersMap] = useState({});
  const [matchingPairs, setMatchingPairs] = useState({ bones: [], names: [] });
  const [matchingSelectedBone, setMatchingSelectedBone] = useState(null);
  const [matchingUserAnswers, setMatchingUserAnswers] = useState({});

  const [quizStartTime, setQuizStartTime] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [latestResultRecord, setLatestResultRecord] = useState(null);
  const [copiedSlip, setCopiedSlip] = useState(false);
  const [showEarlyExitModal, setShowEarlyExitModal] = useState(false);
  const [showUnansweredWarning, setShowUnansweredWarning] = useState(false);
  const [imageLoadFailed, setImageLoadFailed] = useState({});

  const [expandedReviewIndex, setExpandedReviewIndex] = useState(null);

  useEffect(() => {
    if (!auth) return;
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {}
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user || !db) return;
    const historyRef = collection(db, 'artifacts', appId, 'public', 'data', 'anamy_score_history');
    const unsub = onSnapshot(historyRef, (snapshot) => {
      const records = [];
      snapshot.forEach((docSnap) => records.push(docSnap.data()));
      records.sort((a, b) => (b.createdAtMs || 0) - (a.createdAtMs || 0));
      setScoreHistory(records);
    });
    return () => unsub();
  }, [user]);

  useEffect(() => {
    if (playerName.trim()) setNameInputError(false);
  }, [playerName]);

  const handleConfirmHomeMenu = () => {
    if (selectedHomeMenu === 'quiz-setup') {
      if (!playerName.trim()) {
        setNameInputError(true);
        return;
      }
      setSetupStep(1);
      setScreen('quiz-setup');
    } else if (selectedHomeMenu === 'history') {
      setScreen('history');
    }
  };

  useEffect(() => {
    if (screen !== 'quiz-play' || !quizStartTime) return;
    const timer = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - quizStartTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [screen, quizStartTime]);

  const handleStartQuizSession = () => {
    const pool = BONE_DATA.filter((b) => quizCategory === 'All' || b.category.trim() === quizCategory.trim());
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const finalPool = examMode === 'matching' ? pool.slice(0, Math.min(5, pool.length)) : pool;

    setQuizPool(finalPool);
    setCurrentIndex(0);
    setAnswersMap({});
    setQuestionOptionsMap({});

    if (examMode === 'matching') {
      // Create non-matching shuffled name set so items are unique and logical
      const shuffledNames = [...finalPool].sort(() => 0.5 - Math.random());
      setMatchingPairs({
        bones: [...finalPool],
        names: shuffledNames
      });
      setMatchingUserAnswers({});
      setMatchingSelectedBone(null);
    } else if (finalPool.length > 0) {
      // Locked random options map per question session
      const newOptsMap = {};
      finalPool.forEach((bone, idx) => {
        const wrongCandidates = finalPool.filter((b) => b.id !== bone.id);
        const subPool = [...wrongCandidates];
        for (let i = subPool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [subPool[i], subPool[j]] = [subPool[j], subPool[i]];
        }
        const fourChoices = [bone, ...subPool.slice(0, 3)];
        for (let i = fourChoices.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [fourChoices[i], fourChoices[j]] = [fourChoices[j], fourChoices[i]];
        }
        newOptsMap[idx] = fourChoices;
      });
      setQuestionOptionsMap(newOptsMap);
    }

    setShowEarlyExitModal(false);
    setShowUnansweredWarning(false);
    setQuizStartTime(Date.now());
    setElapsedSeconds(0);
    setScreen('quiz-play');
  };

  const handleSelectOption = (option) => {
    setAnswersMap((prev) => ({
      ...prev,
      [currentIndex]: option
    }));
  };

  const handleFillInput = (val) => {
    setAnswersMap((prev) => ({
      ...prev,
      [currentIndex]: val
    }));
  };

  const checkUnansweredAndFinish = () => {
    let unansweredCount = 0;
    if (examMode === 'matching') {
      unansweredCount = quizPool.filter((b) => !matchingUserAnswers[b.id]).length;
    } else {
      unansweredCount = quizPool.filter((_, idx) => !answersMap[idx] || (typeof answersMap[idx] === 'string' && !answersMap[idx].trim())).length;
    }

    if (unansweredCount > 0) {
      setShowUnansweredWarning(true);
    } else {
      processFinalSubmission();
    }
  };

  const processFinalSubmission = () => {
    setShowEarlyExitModal(false);
    setShowUnansweredWarning(false);

    const finalAnswers = [];
    if (examMode === 'matching') {
      quizPool.forEach((bone) => {
        const chosen = matchingUserAnswers[bone.id] || '';
        const isCorrect = chosen.trim().toLowerCase() === bone.nameEn.trim().toLowerCase();
        finalAnswers.push({
          boneId: bone.id,
          boneNameEn: bone.nameEn,
          chosenNameEn: chosen || 'No Answer',
          isCorrect,
          imageUrl: bone.imageUrl,
          num: bone.num,
          options: matchingPairs.names.map(n => ({ id: n.id, nameEn: n.nameEn }))
        });
      });
    } else {
      quizPool.forEach((bone, idx) => {
        const chosen = answersMap[idx];
        let isCorrect = false;
        let chosenText = 'No Answer';

        if (examMode === 'mcq' && chosen) {
          chosenText = chosen.nameEn;
          isCorrect = chosen.id === bone.id;
        } else if (examMode === 'fill' && chosen) {
          chosenText = chosen;
          isCorrect = evaluateFillAnswer(chosen, bone.nameEn);
        }

        finalAnswers.push({
          boneId: bone.id,
          boneNameEn: bone.nameEn,
          chosenNameEn: chosenText,
          isCorrect,
          imageUrl: bone.imageUrl,
          num: bone.num,
          options: questionOptionsMap[idx] || []
        });
      });
    }

    finishQuizAndSaveHistory(finalAnswers);
  };

  const finishQuizAndSaveHistory = async (finalAnswers) => {
    const durationSec = Math.max(1, Math.floor((Date.now() - (quizStartTime || Date.now())) / 1000));
    const activeUser = playerName.trim() || 'Guest';
    const correctCount = finalAnswers.filter((a) => a.isCorrect).length;
    const totalCount = quizPool.length;
    const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

    const previousAttempts = scoreHistory.filter(
      (h) => h.playerName.toLowerCase() === activeUser.toLowerCase() && h.category === quizCategory
    );

    const attemptNumber = previousAttempts.length + 1;
    const firstAttemptScore = previousAttempts.length > 0 ? previousAttempts[previousAttempts.length - 1].score : correctCount;
    const firstAttemptTotal = previousAttempts.length > 0 ? previousAttempts[previousAttempts.length - 1].total : totalCount;

    const createdAtMs = Date.now();
    const timestampStr = new Date().toLocaleDateString('th-TH', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });

    const recordId = `ATT-${createdAtMs.toString().slice(-6)}`;
    const newRecord = {
      id: recordId,
      createdAtMs,
      uid: user?.uid || 'local',
      playerName: activeUser,
      category: quizCategory,
      attemptNumber,
      score: correctCount,
      total: totalCount,
      percentage,
      firstAttemptScore,
      firstAttemptTotal,
      durationSec,
      timestamp: timestampStr,
      examMode,
      details: finalAnswers,
      mistakes: finalAnswers.filter((a) => !a.isCorrect),
    };

    setLatestResultRecord(newRecord);
    setExpandedReviewIndex(null);
    setScreen('quiz-result');

    if (user && db) {
      try {
        await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'anamy_score_history', recordId), newRecord);
      } catch (err) {
        setScoreHistory((prev) => [newRecord, ...prev]);
      }
    } else {
      setScoreHistory((prev) => [newRecord, ...prev]);
    }
  };

  const handleJumpToQuestion = (idx) => {
    setCurrentIndex(idx);
  };

  const handleCopySlipText = async (record) => {
    if (!record) return;
    const text = `📋 ใบรายงานผลสอบ Anamy Game\n👤 ผู้สอบ: ${record.playerName}\n🦴 หมวด: ${record.category}\n✅ ครั้งที่: ${record.attemptNumber}\n🏆 คะแนน: ${record.score}/${record.total} (${record.percentage}%)`;
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {}
    setCopiedSlip(true);
    setTimeout(() => setCopiedSlip(false), 2500);
  };

  const currentQuizBone = quizPool[currentIndex];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623] font-sans pb-12">
      <header className="sticky top-0 z-30 border-b border-[#E6E0D4] bg-[#FFFDF9]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <button
            onClick={() => {
              if (screen === 'quiz-play') setShowEarlyExitModal(true);
              else setScreen('home');
            }}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#C86D51] flex items-center justify-center text-white shadow-xs">
              <Bone className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-extrabold text-[#2C2623]">Anamy Game</h1>
              <p className="text-[11px] text-[#786F68]">ระบบทดสอบโครงกระดูกมนุษย์</p>
            </div>
          </button>

          <div className="flex items-center gap-2">
            {screen === 'quiz-play' ? (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FCEEEE] text-[#C94A4A] text-xs font-extrabold">
                <Lock className="w-3.5 h-3.5" />
                <span>กำลังสอบ (ห้ามออกก่อนส่ง)</span>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setScreen('history')}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#F3EFE6] text-[#2C2623]"
                >
                  <History className="w-3.5 h-3.5 text-[#C86D51]" />
                  <span>ประวัติคะแนน</span>
                </button>
                {screen !== 'home' && (
                  <button
                    onClick={() => setScreen('home')}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#C86D51] text-white text-xs font-bold"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>หน้าหลัก</span>
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-6">
        {screen === 'home' && (
          <div className="space-y-6">
            <div className="bg-[#FFFFFF] border border-[#E6E0D4] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C2623]">
                Hello welcome to Anamy Game
              </h2>
              <p className="text-xs sm:text-sm text-[#6E655F]">
                กรอกชื่อผู้สอบหรือรหัสนักศึกษา แล้วคลิกเลือกเมนูด้านล่าง
              </p>

              <div className="bg-[#FAF7F2] border border-[#E6E0D4] rounded-2xl p-4">
                <label className="block text-xs font-extrabold text-[#2C2623] mb-2">
                  👤 ชื่อผู้สอบ / รหัสนักศึกษา:
                </label>
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="เช่น นศ.สมชาย (67010xxx)..."
                  className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-bold text-[#2C2623] ${
                    nameInputError ? 'border-[#C94A4A]' : 'border-[#E6E0D4]'
                  }`}
                />
                {nameInputError && (
                  <p className="text-xs font-extrabold text-[#C94A4A] mt-2">
                    กรุณากรอกชื่อก่อนเริ่มทำแบบทดสอบ
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedHomeMenu(selectedHomeMenu === 'quiz-setup' ? null : 'quiz-setup')}
                className={`rounded-3xl p-6 text-left border-2 transition-all flex items-start gap-4 ${
                  selectedHomeMenu === 'quiz-setup'
                    ? 'bg-[#FFFDF9] border-[#C86D51] ring-4 ring-[#C86D51]/15'
                    : 'bg-white border-[#E6E0D4]'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C86D51] text-white flex items-center justify-center">
                  <Play className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#2C2623]">เริ่มทำแบบทดสอบ</h3>
                  <p className="text-xs text-[#6E655F]">สอบจริง ตอบผิด/ออกกลางคันมีผลต่อคะแนน</p>
                </div>
              </button>

              <button
                onClick={() => setSelectedHomeMenu(selectedHomeMenu === 'history' ? null : 'history')}
                className={`rounded-3xl p-6 text-left border-2 transition-all flex items-start gap-4 ${
                  selectedHomeMenu === 'history'
                    ? 'bg-[#FFFDF9] border-[#C86D51] ring-4 ring-[#C86D51]/15'
                    : 'bg-white border-[#E6E0D4]'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F3EFE6] text-[#2C2623] flex items-center justify-center">
                  <History className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#2C2623]">ประวัติคะแนนย้อนหลัง</h3>
                  <p className="text-xs text-[#6E655F]">ตรวจสอบคะแนนและการทำซ้ำทั้งหมด</p>
                </div>
              </button>
            </div>

            {selectedHomeMenu && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleConfirmHomeMenu}
                  className="px-8 py-4 rounded-2xl bg-[#C86D51] text-white font-extrabold shadow-md flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  <span>ยืนยันการเลือกเมนู</span>
                </button>
              </div>
            )}
          </div>
        )}

        {screen === 'quiz-setup' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <button onClick={() => setScreen('home')} className="text-xs font-bold text-[#786F68]">
              ← กลับหน้าหลัก
            </button>
            
            {setupStep === 1 && (
              <div className="bg-white border border-[#E6E0D4] rounded-3xl p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-[#2C2623]">ขั้นตอนที่ 1: เลือกระบบการสอบ</h2>
                  <p className="text-xs text-[#786F68] mt-1">กรุณาเลือกรูปแบบข้อสอบที่คุณต้องการทดสอบ (พร้อมไอคอนแสดงตัวอย่าง)</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => setExamMode('mcq')}
                    className={`p-5 rounded-2xl border-2 text-left flex flex-col gap-4 transition-all ${
                      examMode === 'mcq' ? 'border-[#C86D51] bg-[#FAF7F2] ring-4 ring-[#C86D51]/10' : 'border-[#E6E0D4] bg-white'
                    }`}
                  >
                    <div className="w-full h-28 rounded-xl bg-[#F3EFE6] flex items-center justify-center overflow-hidden border border-[#E6E0D4]">
                      <div className="space-y-1.5 w-3/4">
                        <div className="h-2 w-full bg-[#C86D51] rounded-full"></div>
                        <div className="h-2 w-2/3 bg-[#786F68] rounded-full"></div>
                        <div className="h-2 w-1/2 bg-[#786F68] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-[#2C2623]">ปรนัย (MCQ)</h3>
                      <p className="text-[11px] text-[#786F68]">เลือกช้อยส์ A, B, C, D ที่ถูกต้อง</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setExamMode('fill')}
                    className={`p-5 rounded-2xl border-2 text-left flex flex-col gap-4 transition-all ${
                      examMode === 'fill' ? 'border-[#C86D51] bg-[#FAF7F2] ring-4 ring-[#C86D51]/10' : 'border-[#E6E0D4] bg-white'
                    }`}
                  >
                    <div className="w-full h-28 rounded-xl bg-[#F3EFE6] flex items-center justify-center overflow-hidden border border-[#E6E0D4]">
                      <div className="w-3/4 bg-white border border-[#2C2623] rounded-lg p-2 text-[10px] text-[#786F68] font-bold">
                        Type here...
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-[#2C2623]">เติมคำ (Fill-in)</h3>
                      <p className="text-[11px] text-[#786F68]">พิมพ์ชื่อกระดูกภาษาอังกฤษด้วยตนเอง</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setExamMode('matching')}
                    className={`p-5 rounded-2xl border-2 text-left flex flex-col gap-4 transition-all ${
                      examMode === 'matching' ? 'border-[#C86D51] bg-[#FAF7F2] ring-4 ring-[#C86D51]/10' : 'border-[#E6E0D4] bg-white'
                    }`}
                  >
                    <div className="w-full h-28 rounded-xl bg-[#F3EFE6] flex items-center justify-center overflow-hidden border border-[#E6E0D4]">
                      <div className="flex gap-2 w-3/4 justify-center items-center">
                        <div className="w-8 h-8 rounded-lg bg-[#3B7A57]"></div>
                        <div className="w-4 h-0.5 bg-[#2C2623]"></div>
                        <div className="w-8 h-8 rounded-lg bg-[#C86D51]"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-[#2C2623]">จับคู่ (Matching)</h3>
                      <p className="text-[11px] text-[#786F68]">จับคู่ภาพโครงกระดูกกับชื่อคำศัพท์</p>
                    </div>
                  </button>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setSetupStep(2)}
                    className="px-8 py-3.5 rounded-2xl bg-[#C86D51] text-white font-extrabold text-sm flex items-center gap-2 shadow-md"
                  >
                    <span>ถัดไป: เลือกส่วนที่จะสอบ</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {setupStep === 2 && (
              <div className="bg-white border border-[#E6E0D4] rounded-3xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-extrabold text-[#2C2623]">ขั้นตอนที่ 2: เลือกหมวดหมู่กระดูก</h2>
                    <p className="text-xs text-[#786F68] mt-1">เลือกส่วนของร่างกายที่ต้องการทดสอบ</p>
                  </div>
                  <button
                    onClick={() => setSetupStep(1)}
                    className="text-xs font-bold text-[#C86D51] hover:underline"
                  >
                    ← เปลี่ยนรูปแบบสอบ
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CATEGORIES.map((cat) => {
                    const IconComp = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setQuizCategory(cat.id)}
                        className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${
                          quizCategory === cat.id ? 'border-2 border-[#C86D51] bg-[#FAF7F2]' : 'border-[#E6E0D4]'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          quizCategory === cat.id ? 'bg-[#C86D51] text-white' : 'bg-[#F3EFE6] text-[#2C2623]'
                        }`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-extrabold text-sm text-[#2C2623]">{cat.nameEn}</div>
                          <div className="text-xs text-[#C86D51] font-bold">{cat.nameTh}</div>
                          <p className="text-[11px] text-[#786F68] mt-1">{cat.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleStartQuizSession}
                  className="w-full py-4 rounded-2xl bg-[#C86D51] text-white font-extrabold text-base shadow-md flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>เริ่มทำแบบทดสอบทันที</span>
                </button>
              </div>
            )}
          </div>
        )}

        {screen === 'quiz-play' && (
          <div className="space-y-5">
            {showEarlyExitModal && (
              <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                <div className="bg-white border-2 border-[#C94A4A] rounded-3xl max-w-md w-full p-6 space-y-4">
                  <h3 className="text-base font-extrabold text-[#2C2623]">ยุติการสอบก่อนกำหนด?</h3>
                  <p className="text-xs text-[#C94A4A]">ข้อที่เหลือจะถูกคิดเป็น 0 คะแนนทันที</p>
                  <div className="flex gap-2">
                    <button onClick={() => setShowEarlyExitModal(false)} className="flex-1 py-3 rounded-xl bg-black text-white text-xs font-bold">ทำต่อ</button>
                    <button onClick={processFinalSubmission} className="flex-1 py-3 rounded-xl bg-[#C94A4A] text-white text-xs font-bold">ยอมรับและส่งข้อสอบ</button>
                  </div>
                </div>
              </div>
            )}

            {showUnansweredWarning && (
              <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                <div className="bg-white border-2 border-[#C86D51] rounded-3xl max-w-md w-full p-6 space-y-4">
                  <h3 className="text-base font-extrabold text-[#2C2623]">⚠️ มีข้อที่ยังไม่ได้ตอบ</h3>
                  <p className="text-xs text-[#786F68]">คุณยังทำข้อสอบไม่ครบทุกข้อ ต้องการส่งข้อสอบเลยหรือไม่?</p>
                  <div className="flex gap-2">
                    <button onClick={() => setShowUnansweredWarning(false)} className="flex-1 py-3 rounded-xl bg-black text-white text-xs font-bold">กลับไปทำต่อ</button>
                    <button onClick={processFinalSubmission} className="flex-1 py-3 rounded-xl bg-[#C86D51] text-white text-xs font-bold">ยืนยันส่งข้อสอบ</button>
                  </div>
                </div>
              </div>
            )}

            {/* TOP PROGRESS BAR */}
            <div className="bg-white border border-[#E6E0D4] rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-extrabold text-[#2C2623]">
                  {examMode === 'matching' ? 'โหมดจับคู่คำศัพท์กับรูปภาพ' : `ข้อที่ ${currentIndex + 1} / ${quizPool.length}`}
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowEarlyExitModal(true)} 
                    className="px-3 py-1.5 bg-[#C86D51] text-white rounded-xl text-xs font-extrabold shadow-xs"
                  >
                    ส่งข้อสอบ / จบการสอบ
                  </button>
                </div>
              </div>

              {examMode !== 'matching' && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {quizPool.map((_, idx) => {
                    const isAnswered = answersMap[idx] !== undefined && answersMap[idx] !== '';
                    const isCurrent = currentIndex === idx;
                    let btnColor = 'bg-[#E6E0D4] text-[#786F68]'; // ยังไม่ถึง/ยังไม่ตอบ
                    if (isAnswered) {
                      btnColor = 'bg-[#3B7A57] text-white'; // ตอบแล้ว สีเขียว
                    } else if (isCurrent) {
                      btnColor = 'bg-[#2C2623] text-white ring-2 ring-[#C86D51]'; // กำลังทำอยู่
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleJumpToQuestion(idx)}
                        className={`w-8 h-8 rounded-xl text-xs font-extrabold flex items-center justify-center transition-all ${btnColor}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* MAIN EXAM CONTENT */}
            {examMode === 'matching' ? (
              <div className="bg-white border border-[#E6E0D4] rounded-3xl p-6 space-y-6">
                <h2 className="text-lg font-extrabold text-[#2C2623] text-center">จับคู่รูปภาพโครงกระดูกกับชื่อภาษาอังกฤษที่ถูกต้อง</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: Images */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-extrabold text-[#786F68]">รูปภาพโครงกระดูก</h4>
                    {matchingPairs.bones.map((bone) => {
                      const isSelected = matchingSelectedBone?.id === bone.id;
                      const hasAnswered = matchingUserAnswers[bone.id];
                      return (
                        <div
                          key={bone.id}
                          onClick={() => setMatchingSelectedBone(bone)}
                          className={`p-3 rounded-2xl border-2 flex items-center gap-4 cursor-pointer transition-all ${
                            isSelected ? 'border-[#C86D51] bg-[#FAF7F2]' : hasAnswered ? 'border-[#3B7A57] bg-[#EBF5EE]' : 'border-[#E6E0D4] bg-white'
                          }`}
                        >
                          {!imageLoadFailed[bone.id] ? (
                            <img 
                              src={bone.imageUrl} 
                              alt="" 
                              className="w-16 h-16 object-contain rounded-xl bg-[#FAF7F2]" 
                              onError={() => setImageLoadFailed(prev => ({ ...prev, [bone.id]: true }))}
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-xl bg-[#F3EFE6] flex items-center justify-center text-[10px] text-[#786F68]">ไม่มีรูป</div>
                          )}
                          <div>
                            <span className="text-xs font-extrabold">ข้อที่ {bone.num}</span>
                            <div className="text-xs font-bold text-[#3B7A57]">
                              {hasAnswered ? `เลือกคู่แล้ว: ${hasAnswered}` : 'คลิกเพื่อเลือกคู่'}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right: Names */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-extrabold text-[#786F68]">ชื่อคำศัพท์กระดูก</h4>
                    {matchingPairs.names.map((boneNameObj) => {
                      const isAssigned = Object.values(matchingUserAnswers).includes(boneNameObj.nameEn);
                      return (
                        <button
                          key={boneNameObj.id}
                          disabled={!matchingSelectedBone}
                          onClick={() => {
                            if (matchingSelectedBone) {
                              setMatchingUserAnswers((prev) => ({
                                ...prev,
                                [matchingSelectedBone.id]: boneNameObj.nameEn
                              }));
                              setMatchingSelectedBone(null);
                            }
                          }}
                          className={`w-full p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${
                            isAssigned ? 'bg-[#EBF5EE] border-[#3B7A57] text-[#3B7A57]' : 'bg-[#FAF7F2] border-[#E6E0D4] hover:bg-[#F3EFE6]'
                          }`}
                        >
                          <span className="font-extrabold text-sm">{boneNameObj.nameEn}</span>
                          <span className="text-xs">{isAssigned ? '✓ จับคู่แล้ว' : 'คลิกจับคู่'}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={checkUnansweredAndFinish}
                  className="w-full py-4 rounded-2xl bg-[#C86D51] text-white font-extrabold text-sm shadow-md"
                >
                  ส่งคำตอบโหมดจับคู่
                </button>
              </div>
            ) : (
              currentQuizBone && (() => {
                const options = questionOptionsMap[currentIndex] || [];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-6 bg-white border border-[#E6E0D4] rounded-3xl p-5 flex items-center justify-center min-h-[340px]">
                      {currentQuizBone.imageUrl && !imageLoadFailed[currentQuizBone.id] ? (
                        <img
                          src={currentQuizBone.imageUrl}
                          alt={`Question ${currentQuizBone.num}`}
                          className="max-h-[320px] w-auto object-contain rounded-2xl"
                          onError={() =>
                            setImageLoadFailed((prev) => ({ ...prev, [currentQuizBone.id]: true }))
                          }
                        />
                      ) : (
                        <div className="text-xs text-[#786F68]">ไม่พบรูปภาพ</div>
                      )}
                    </div>

                    <div className="lg:col-span-6 bg-white border border-[#E6E0D4] rounded-3xl p-6 space-y-4 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h2 className="text-lg font-extrabold text-[#2C2623]">
                          {examMode === 'fill' ? 'พิมพ์ชื่อภาษาอังกฤษของกระดูกในภาพ:' : 'กระดูกส่วนที่ชี้ในภาพคือข้อใด?'}
                        </h2>

                        {examMode === 'mcq' ? (
                          <div className="space-y-3">
                            {options.map((option, idx) => {
                              const isSelected = answersMap[currentIndex]?.id === option.id;
                              return (
                                <button
                                  key={option.id}
                                  onClick={() => handleSelectOption(option)}
                                  className={`w-full p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                                    isSelected 
                                      ? 'bg-[#2C2623] text-white border-[#2C2623] shadow-md' 
                                      : 'bg-[#FAF7F2] hover:bg-[#F3EFE6] border-[#E6E0D4]'
                                  }`}
                                >
                                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold ${
                                    isSelected ? 'bg-[#C86D51] text-white' : 'bg-white text-[#C86D51]'
                                  }`}>
                                    {String.fromCharCode(65 + idx)}
                                  </span>
                                  <span className="font-bold text-base">{option.nameEn}</span>
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="space-y-4 py-4">
                            <input
                              type="text"
                              value={answersMap[currentIndex] || ''}
                              onChange={(e) => handleFillInput(e.target.value)}
                              placeholder="ตอบเป็นภาษาอังกฤษ"
                              className="w-full bg-[#FAF7F2] border border-[#E6E0D4] rounded-2xl px-4 py-3.5 text-base font-bold text-[#2C2623] focus:outline-none focus:border-[#C86D51]"
                            />
                          </div>
                        )}
                      </div>

                      {/* NAVIGATION BUTTONS */}
                      <div className="flex gap-3 pt-4 border-t border-[#E6E0D4]">
                        <button
                          disabled={currentIndex === 0}
                          onClick={() => handleJumpToQuestion(currentIndex - 1)}
                          className={`flex-1 py-3.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1 ${
                            currentIndex === 0 ? 'bg-[#FAF7F2] text-[#A89F96] cursor-not-allowed' : 'bg-[#F3EFE6] text-[#2C2623]'
                          }`}
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>ข้อก่อนหน้า</span>
                        </button>

                        {currentIndex + 1 < quizPool.length ? (
                          <button
                            onClick={() => handleJumpToQuestion(currentIndex + 1)}
                            className="flex-1 py-3.5 rounded-xl bg-[#C86D51] text-white font-extrabold text-xs flex items-center justify-center gap-1"
                          >
                            <span>ข้อถัดไป</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={checkUnansweredAndFinish}
                            className="flex-1 py-3.5 rounded-xl bg-[#3B7A57] text-white font-extrabold text-xs flex items-center justify-center gap-1"
                          >
                            <Check className="w-4 h-4" />
                            <span>ส่งข้อสอบทั้งหมด</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        )}

        {screen === 'quiz-result' && latestResultRecord && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white border-2 border-[#2C2623] rounded-3xl overflow-hidden shadow-md">
              <div className="bg-[#2C2623] text-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-base font-extrabold">ใบรายงานผลคะแนน (Official Score Slip)</h2>
                <span className="px-3 py-1 bg-[#C86D51] rounded-full text-xs">
                  ครั้งที่ {latestResultRecord.attemptNumber}
                </span>
              </div>
              <div className="p-6 space-y-6">
                <div className="text-center bg-[#FAF7F2] p-6 rounded-2xl border">
                  <div className="text-3xl font-extrabold text-[#2C2623]">
                    {latestResultRecord.score} / {latestResultRecord.total} ({latestResultRecord.percentage}%)
                  </div>
                </div>

                {/* DETAILED QUESTION REVIEW INLINE EXPANDABLE */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-extrabold text-[#2C2623]">ผลการทำข้อสอบรายข้อ (คลิกเพื่อขยายดูรายละเอียด):</h3>
                  <div className="space-y-3">
                    {latestResultRecord.details?.map((item, idx) => {
                      const isExpanded = expandedReviewIndex === idx;
                      return (
                        <div key={idx} className="border border-[#E6E0D4] rounded-2xl overflow-hidden bg-white transition-all">
                          <div
                            onClick={() => setExpandedReviewIndex(isExpanded ? null : idx)}
                            className={`p-4 cursor-pointer flex items-center justify-between ${
                              item.isCorrect ? 'bg-[#EBF5EE]' : 'bg-[#FCEEEE]'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-extrabold text-white ${
                                item.isCorrect ? 'bg-[#3B7A57]' : 'bg-[#C94A4A]'
                              }`}>
                                {idx + 1}
                              </span>
                              <div>
                                <span className="text-xs font-extrabold text-[#2C2623]">ข้อที่ {idx + 1}</span>
                                <div className="text-xs font-bold text-[#786F68]">ตอบ: {item.chosenNameEn}</div>
                              </div>
                            </div>
                            <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                              item.isCorrect ? 'bg-[#3B7A57] text-white' : 'bg-[#C94A4A] text-white'
                            }`}>
                              {item.isCorrect ? 'ถูกต้อง' : 'ผิด'}
                            </span>
                          </div>

                          {/* EXPANDED VIEW: MATCHING EXACT QUIZ INTERFACE */}
                          {isExpanded && (
                            <div className="p-5 border-t border-[#E6E0D4] bg-[#FAF7F2] space-y-4">
                              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-6 bg-white border border-[#E6E0D4] rounded-2xl p-4 flex items-center justify-center min-h-[260px]">
                                  <img src={item.imageUrl} alt="" className="max-h-[240px] object-contain rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                                </div>
                                <div className="lg:col-span-6 bg-white border border-[#E6E0D4] rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                                  <h4 className="text-sm font-extrabold text-[#2C2623]">
                                    {latestResultRecord.examMode === 'fill' ? 'พิมพ์ชื่อภาษาอังกฤษของกระดูกในภาพ:' : 'กระดูกส่วนที่ชี้ในภาพคือข้อใด?'}
                                  </h4>

                                  {latestResultRecord.examMode === 'fill' ? (
                                    <div className="space-y-3 py-2">
                                      <div className="p-3 bg-[#FAF7F2] border border-[#E6E0D4] rounded-xl text-xs">
                                        <b>คำตอบที่คุณพิมพ์:</b> <span className={item.isCorrect ? 'text-[#3B7A57] font-bold' : 'text-[#C94A4A] font-bold'}>{item.chosenNameEn}</span>
                                      </div>
                                      <div className="p-3 bg-[#EBF5EE] border border-[#3B7A57] rounded-xl text-xs text-[#3B7A57]">
                                        <b>คำตอบที่ถูกต้อง:</b> <b>{item.boneNameEn}</b>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="space-y-2">
                                      {item.options?.map((opt, oIdx) => {
                                        const isChosenUser = opt.nameEn === item.chosenNameEn;
                                        const isTheCorrectOne = opt.nameEn === item.boneNameEn;

                                        let btnStyle = 'bg-[#FAF7F2] border-[#E6E0D4] text-[#2C2623]';
                                        if (isTheCorrectOne) {
                                          btnStyle = 'bg-[#3B7A57] text-white border-[#3B7A57] font-extrabold'; // ถูกต้อง Highlight เขียว
                                        } else if (isChosenUser && !item.isCorrect) {
                                          btnStyle = 'bg-[#C94A4A] text-white border-[#C94A4A] font-extrabold'; // ผิด Highlight แดง
                                        }

                                        return (
                                          <div
                                            key={oIdx}
                                            className={`w-full p-3 rounded-xl border text-left flex items-center gap-3 text-xs ${btnStyle}`}
                                          >
                                            <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-bold">
                                              {String.fromCharCode(65 + oIdx)}
                                            </span>
                                            <span>{opt.nameEn}</span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => handleCopySlipText(latestResultRecord)} className="flex-1 py-3 bg-[#2C2623] text-white rounded-xl text-xs font-extrabold">
                    {copiedSlip ? 'คัดลอกแล้ว!' : 'คัดลอกใบสรุปผล'}
                  </button>
                  <button onClick={() => setScreen('home')} className="flex-1 py-3 bg-[#C86D51] text-white rounded-xl text-xs font-extrabold">
                    กลับหน้าหลัก
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}