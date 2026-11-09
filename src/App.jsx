import React, { useState, useEffect } from 'react';
import {
  Bone,
  Brain,
  Shield,
  Hand,
  Footprints,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  History,
  Play,
  Home,
  ArrowLeft,
  Lock,
  CheckCircle2,
  LogOut,
  Eye,
  X,
  Settings,
  ShieldCheck,
  Stethoscope,
  Activity,
  Microscope,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  GripHorizontal
} from 'lucide-react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
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

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
const appId = firebaseConfig.projectId || 'anamy-game-local';

// ==========================================
// 1. COMPLETE BONE DATA (Accurate Public Folder Paths)
// ==========================================
const BONE_DATA = [
  // --- 1. HEAD (15 items) ---
  { id: 'head-1', category: 'Head', num: 1, nameEn: 'Sphenoid', imageUrl: '/bones/Head/IMG_2251.PNG' },
  { id: 'head-2', category: 'Head', num: 2, nameEn: 'Ethmoid', imageUrl: '/bones/Head/IMG_2252.PNG' },
  { id: 'head-3', category: 'Head', num: 3, nameEn: 'Maxilla', imageUrl: '/bones/Head/IMG_2254.PNG' },
  { id: 'head-4', category: 'Head', num: 4, nameEn: 'Zygomatic', imageUrl: '/bones/Head/IMG_2255.PNG' },
  { id: 'head-5', category: 'Head', num: 5, nameEn: 'Mandible', imageUrl: '/bones/Head/IMG_2256.PNG' },
  { id: 'head-6', category: 'Head', num: 6, nameEn: 'Frontal', imageUrl: '/bones/Head/IMG_2257.PNG' },
  { id: 'head-7', category: 'Head', num: 7, nameEn: 'Temporal', imageUrl: '/bones/Head/IMG_2258.PNG' },
  { id: 'head-8', category: 'Head', num: 8, nameEn: 'Parietal', imageUrl: '/bones/Head/IMG_2259.PNG' },
  { id: 'head-9', category: 'Head', num: 9, nameEn: 'Occipital', imageUrl: '/bones/Head/IMG_2260.PNG' },
  { id: 'head-10', category: 'Head', num: 10, nameEn: 'Hyoid', imageUrl: '/bones/Head/IMG_2261.PNG' },
  { id: 'head-11', category: 'Head', num: 11, nameEn: 'Nasal', imageUrl: '/bones/Head/IMG_2263.PNG' },
  { id: 'head-12', category: 'Head', num: 12, nameEn: 'Vomer', imageUrl: '/bones/Head/IMG_2264.PNG' },
  { id: 'head-13', category: 'Head', num: 13, nameEn: 'Lacrimal', imageUrl: '/bones/Head/IMG_2268.PNG' },
  { id: 'head-14', category: 'Head', num: 14, nameEn: 'Nasal concha(turbinate)', imageUrl: '/bones/Head/IMG_2269.PNG' },
  { id: 'head-15', category: 'Head', num: 15, nameEn: 'Palatine', imageUrl: '/bones/Head/IMG_2270.PNG' },

  // --- 2. THORACIC TRUNK (10 items) ---
  { id: 'thoracic trunk-1', category: 'Thoracic trunk', num: 1, nameEn: 'Sacrum', imageUrl: '/bones/Thoracic trunk/IMG_3984.PNG' },
  { id: 'thoracic trunk-2', category: 'Thoracic trunk', num: 2, nameEn: 'Hip Bone', imageUrl: '/bones/Thoracic trunk/IMG_3986.PNG' },
  { id: 'thoracic trunk-3', category: 'Thoracic trunk', num: 3, nameEn: 'Clavicle', imageUrl: '/bones/Thoracic trunk/IMG_3987.PNG' },
  { id: 'thoracic trunk-4', category: 'Thoracic trunk', num: 4, nameEn: 'Scapula', imageUrl: '/bones/Thoracic trunk/IMG_3989.PNG' },
  { id: 'thoracic trunk-5', category: 'Thoracic trunk', num: 5, nameEn: 'Sternum', imageUrl: '/bones/Thoracic trunk/IMG_4022.PNG' },
  { id: 'thoracic trunk-6', category: 'Thoracic trunk', num: 6, nameEn: 'Cervical vertebrae', imageUrl: '/bones/Thoracic trunk/IMG_4036.JPG' },
  { id: 'thoracic trunk-7', category: 'Thoracic trunk', num: 7, nameEn: 'Thoracic vertebrae', imageUrl: '/bones/Thoracic trunk/IMG_4037.JPG' },
  { id: 'thoracic trunk-8', category: 'Thoracic trunk', num: 8, nameEn: 'Lumbar vertebrae', imageUrl: '/bones/Thoracic trunk/IMG_4039.JPG' },
  { id: 'thoracic trunk-9', category: 'Thoracic trunk', num: 9, nameEn: 'Coccyx', imageUrl: '/bones/Thoracic trunk/IMG_4041.JPG' },
  { id: 'thoracic trunk-10', category: 'Thoracic trunk', num: 10, nameEn: 'Ribs', imageUrl: '/bones/Thoracic trunk/IMG_4042.JPG' },

  // --- 3. UPPER (15 items) ---
  { id: 'upper-1', category: 'Upper', num: 1, nameEn: 'Humerus', imageUrl: '/bones/Upper/IMG_3990.PNG' },
  { id: 'upper-2', category: 'Upper', num: 2, nameEn: 'Radius', imageUrl: '/bones/Upper/IMG_3991.PNG' },
  { id: 'upper-3', category: 'Upper', num: 3, nameEn: 'Ulna', imageUrl: '/bones/Upper/IMG_3992.PNG' },
  { id: 'upper-4', category: 'Upper', num: 4, nameEn: 'Metacarpal', imageUrl: '/bones/Upper/IMG_4001.PNG' },
  { id: 'upper-5', category: 'Upper', num: 5, nameEn: 'Proximal phalanx', imageUrl: '/bones/Upper/IMG_4002.PNG' },
  { id: 'upper-6', category: 'Upper', num: 6, nameEn: 'Middle phalanx', imageUrl: '/bones/Upper/IMG_4003.PNG' },
  { id: 'upper-7', category: 'Upper', num: 7, nameEn: 'Distal phalanx', imageUrl: '/bones/Upper/IMG_4005.PNG' },
  { id: 'upper-8', category: 'Upper', num: 8, nameEn: 'Trapezium', imageUrl: '/bones/Upper/IMG_4023.PNG' },
  { id: 'upper-9', category: 'Upper', num: 9, nameEn: 'Trapezoid', imageUrl: '/bones/Upper/IMG_4024.PNG' },
  { id: 'upper-10', category: 'Upper', num: 10, nameEn: 'Capitate', imageUrl: '/bones/Upper/IMG_4025.PNG' },
  { id: 'upper-11', category: 'Upper', num: 11, nameEn: 'Hamate', imageUrl: '/bones/Upper/IMG_4026.PNG' },
  { id: 'upper-12', category: 'Upper', num: 12, nameEn: 'Scaphoid', imageUrl: '/bones/Upper/IMG_4027.PNG' },
  { id: 'upper-13', category: 'Upper', num: 13, nameEn: 'Lunate', imageUrl: '/bones/Upper/IMG_4028.PNG' },
  { id: 'upper-14', category: 'Upper', num: 14, nameEn: 'Triquetrum', imageUrl: '/bones/Upper/IMG_4029.PNG' },
  { id: 'upper-15', category: 'Upper', num: 15, nameEn: 'Pisiform', imageUrl: '/bones/Upper/IMG_4030.PNG' },

  // --- 4. LOWER (15 items) ---
  { id: 'lower-1', category: 'Lower', num: 1, nameEn: 'Talus', imageUrl: '/bones/Lower/IMG_4011.PNG' },
  { id: 'lower-2', category: 'Lower', num: 2, nameEn: 'Calcaneus', imageUrl: '/bones/Lower/IMG_4012.PNG' },
  { id: 'lower-3', category: 'Lower', num: 3, nameEn: 'Navicular', imageUrl: '/bones/Lower/IMG_4013.PNG' },
  { id: 'lower-4', category: 'Lower', num: 4, nameEn: 'Cuboid', imageUrl: '/bones/Lower/IMG_4014.PNG' },
  { id: 'lower-5', category: 'Lower', num: 5, nameEn: 'Lateral cuneiform', imageUrl: '/bones/Lower/IMG_4015.PNG' },
  { id: 'lower-6', category: 'Lower', num: 6, nameEn: 'Intermediate cuneiform', imageUrl: '/bones/Lower/IMG_4016.PNG' },
  { id: 'lower-7', category: 'Lower', num: 7, nameEn: 'Medial cuneiform', imageUrl: '/bones/Lower/IMG_4017.PNG' },
  { id: 'lower-8', category: 'Lower', num: 8, nameEn: 'Metatarsal', imageUrl: '/bones/Lower/IMG_4018.PNG' },
  { id: 'lower-9', category: 'Lower', num: 9, nameEn: 'Proximal phalanx', imageUrl: '/bones/Lower/IMG_4019.PNG' },
  { id: 'lower-10', category: 'Lower', num: 10, nameEn: 'Distal phalanx', imageUrl: '/bones/Lower/IMG_4020.PNG' },
  { id: 'lower-11', category: 'Lower', num: 11, nameEn: 'Middle phalanges', imageUrl: '/bones/Lower/IMG_4021.PNG' },
  { id: 'lower-12', category: 'Lower', num: 12, nameEn: 'Femur', imageUrl: '/bones/Lower/IMG_4031.PNG' },
  { id: 'lower-13', category: 'Lower', num: 13, nameEn: 'Patella', imageUrl: '/bones/Lower/IMG_4032.PNG' },
  { id: 'lower-14', category: 'Lower', num: 14, nameEn: 'Tibia', imageUrl: '/bones/Lower/IMG_4033.PNG' },
  { id: 'lower-15', category: 'Lower', num: 15, nameEn: 'Fibula', imageUrl: '/bones/Lower/IMG_4034.PNG' }
];

const CATEGORIES = [
  { 
    id: 'All', 
    nameEn: 'All Bones', 
    nameTh: 'โครงกระดูกทั่วร่างกาย (Full Skeleton)', 
    icon: Bone, 
    desc: 'ทดสอบรวมกระดูกทุกส่วนของร่างกายมนุษย์ในรอบเดียว' 
  },
  { 
    id: 'Head', 
    nameEn: 'Head', 
    nameTh: 'กระดูกกะโหลกศีรษะและใบหน้า (Cranial & Facial Bones)', 
    icon: Brain, 
    desc: 'กระดูกหุ้มสมอง (Neurocranium) และกระดูกโครงหน้า (Viscerocranium)' 
  },
  { 
    id: 'Thoracic trunk', 
    nameEn: 'Thoracic trunk', 
    nameTh: 'กระดูกแกนกลางและลำตัว (Axial Skeleton & Trunk)', 
    icon: Shield, 
    desc: 'กระดูกสันหลัง (Vertebral column), ทรวงอก (Thoracic cage) และกระดูกเชิงกราน' 
  },
  { 
    id: 'Upper', 
    nameEn: 'Upper', 
    nameTh: 'กระดูกรยางค์บน (Upper Extremity)', 
    icon: Hand, 
    desc: 'กระดูกต้นแขน, ท่อนแขน, ข้อมือ (Carpals) และกระดูกนิ้วมือ (Phalanges)' 
  },
  { 
    id: 'Lower', 
    nameEn: 'Lower', 
    nameTh: 'กระดูกรยางค์ล่าง (Lower Extremity)', 
    icon: Footprints, 
    desc: 'กระดูกต้นขา, สะบ้า, หน้าแข้ง, ข้อเท้า (Tarsals) และกระดูกนิ้วเท้า' 
  },
];

const AVATAR_OPTIONS = [
  { id: 'bone', label: 'Bone Master', icon: Bone, bg: 'bg-[#C86D51]' },
  { id: 'brain', label: 'Neuro Specialist', icon: Brain, bg: 'bg-[#3B82F6]' },
  { id: 'stethoscope', label: 'Resident Doctor', icon: Stethoscope, bg: 'bg-[#10B981]' },
  { id: 'microscope', label: 'Pathologist', icon: Microscope, bg: 'bg-[#8B5CF6]' },
  { id: 'activity', label: 'Cardio Pro', icon: Activity, bg: 'bg-[#EF4444]' },
  { id: 'shield', label: 'Anatomy Guardian', icon: ShieldCheck, bg: 'bg-[#F59E0B]' },
];

const handleSafeImageFallback = (e, originalUrl) => {
  if (!e || !e.target) return;
  const currentSrc = e.target.src || '';
  if (currentSrc.includes('.JPG')) {
    e.target.src = originalUrl.replace('.JPG', '.PNG');
  } else if (currentSrc.includes('.PNG')) {
    e.target.src = originalUrl.replace('.PNG', '.JPG');
  } else if (currentSrc.includes('/Thoracic%20trunk/')) {
    e.target.src = originalUrl.replace('/Thoracic trunk/', '/thoracic trunk/');
  }
};

// ==========================================
// AUDIO SYNTHESIZER
// ==========================================
class SoundFX {
  static ctx = null;
  static soundEnabled = true;

  static init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  static playBeep(freq = 440, type = 'sine', duration = 0.08, vol = 0.15) {
    if (!this.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  static click() {
    this.playBeep(620, 'sine', 0.04, 0.1);
  }

  static select() {
    this.playBeep(520, 'triangle', 0.06, 0.12);
  }

  static hover() {
    this.playBeep(880, 'sine', 0.02, 0.04);
  }

  static toggle() {
    this.playBeep(780, 'sine', 0.07, 0.12);
  }

  static drop() {
    this.playBeep(700, 'triangle', 0.08, 0.14);
  }

  static success() {
    if (!this.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        setTimeout(() => this.playBeep(freq, 'sine', 0.12, 0.15), idx * 80);
      });
    } catch (e) {}
  }
}

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

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('anamy_theme') === 'dark';
  });
  const [soundOn, setSoundOn] = useState(() => {
    return localStorage.getItem('anamy_sound') !== 'false';
  });

  const [user, setUser] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const [showLoginPromptModal, setShowLoginPromptModal] = useState(false);
  const [showUnsavedSettingsModal, setShowUnsavedSettingsModal] = useState(false);
  
  const [customAvatar, setCustomAvatar] = useState(() => {
    return localStorage.getItem('anamy_custom_avatar') || 'bone';
  });
  const [draftAvatar, setDraftAvatar] = useState(customAvatar);

  const [playerName, setPlayerName] = useState(() => {
    return localStorage.getItem('anamy_player_name') || '';
  });
  const [nameInputError, setNameInputError] = useState(false);
  const [settingsSavedToast, setSettingsSavedToast] = useState(false);

  const [scoreHistory, setScoreHistory] = useState([]);

  // Setup Quiz States
  const [setupStep, setSetupStep] = useState(1);
  const [examMode, setExamMode] = useState('mcq');
  const [quizCategory, setQuizCategory] = useState('Head');

  // Active Quiz
  const [quizPool, setQuizPool] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionOptionsMap, setQuestionOptionsMap] = useState({});
  const [answersMap, setAnswersMap] = useState({});

  // Matching Mode States
  const [matchingPairs, setMatchingPairs] = useState({ bones: [], names: [] });
  const [matchingSlots, setMatchingSlots] = useState({});
  const [activeDragItem, setActiveDragItem] = useState(null);
  const [hoveredDropTarget, setHoveredDropTarget] = useState(null);
  const [selectedWordForClickDrop, setSelectedWordForClickDrop] = useState(null);

  const [quizStartTime, setQuizStartTime] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [latestResultRecord, setLatestResultRecord] = useState(null);
  
  const [showEarlyExitModal, setShowEarlyExitModal] = useState(false);
  const [showUnansweredWarning, setShowUnansweredWarning] = useState(false);
  const [imageLoadFailed, setImageLoadFailed] = useState({});

  const [expandedReviewIndex, setExpandedReviewIndex] = useState(null);
  const [selectedHistoryDetail, setSelectedHistoryDetail] = useState(null);
  const [historyDetailExpandedIdx, setHistoryDetailExpandedIdx] = useState(null);

  useEffect(() => {
    localStorage.setItem('anamy_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    SoundFX.soundEnabled = soundOn;
    localStorage.setItem('anamy_sound', soundOn ? 'true' : 'false');
  }, [soundOn]);

  const toggleTheme = () => {
    SoundFX.toggle();
    setDarkMode(prev => !prev);
  };

  const toggleSound = () => {
    setSoundOn(prev => {
      const next = !prev;
      SoundFX.soundEnabled = next;
      if (next) SoundFX.click();
      return next;
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsSigningIn(false);
      if (currentUser?.displayName && !playerName) {
        setPlayerName(currentUser.displayName);
        localStorage.setItem('anamy_player_name', currentUser.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const historyRef = collection(db, 'artifacts', appId, 'public', 'data', 'anamy_score_history');
    const unsub = onSnapshot(historyRef, (snapshot) => {
      const records = [];
      snapshot.forEach((docSnap) => records.push(docSnap.data()));
      records.sort((a, b) => (b.createdAtMs || 0) - (a.createdAtMs || 0));
      setScoreHistory(records);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (playerName.trim()) setNameInputError(false);
  }, [playerName]);

  const handleGoogleSignIn = async () => {
    SoundFX.click();
    if (isSigningIn) return;
    setIsSigningIn(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result?.user) {
        setUser(result.user);
        if (result.user.displayName && !playerName) {
          setPlayerName(result.user.displayName);
          localStorage.setItem('anamy_player_name', result.user.displayName);
        }
        setShowLoginPromptModal(false);
        SoundFX.success();
      }
    } catch (err) {
      console.error("Google Sign-In Error:", err);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleConfirmSignOut = async () => {
    SoundFX.click();
    try {
      await signOut(auth);
      setUser(null);
      setShowSignOutModal(false);
      setScreen('home');
    } catch (err) {
      console.error("Sign-Out Error:", err);
    }
  };

  const handleOpenSettings = () => {
    SoundFX.click();
    setDraftAvatar(customAvatar);
    setScreen('settings');
  };

  const handleAttemptLeaveSettings = () => {
    SoundFX.click();
    if (draftAvatar !== customAvatar) {
      setShowUnsavedSettingsModal(true);
    } else {
      setScreen('home');
    }
  };

  const handleDiscardAndLeaveSettings = () => {
    SoundFX.click();
    setDraftAvatar(customAvatar);
    setShowUnsavedSettingsModal(false);
    setScreen('home');
  };

  const handleSaveAndLeaveSettings = () => {
    handleSaveSettings();
    setShowUnsavedSettingsModal(false);
    setScreen('home');
  };

  const handleSaveSettings = () => {
    SoundFX.success();
    setCustomAvatar(draftAvatar);
    localStorage.setItem('anamy_custom_avatar', draftAvatar);
    setSettingsSavedToast(true);
    setTimeout(() => setSettingsSavedToast(false), 2000);
  };

  const handleConfirmHomeMenu = () => {
    SoundFX.click();
    if (!user) {
      setShowLoginPromptModal(true);
      return;
    }

    if (selectedHomeMenu === 'quiz-setup') {
      if (!playerName.trim()) {
        setNameInputError(true);
        return;
      }
      localStorage.setItem('anamy_player_name', playerName);
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
    SoundFX.click();
    if (!user) {
      setShowLoginPromptModal(true);
      return;
    }

    const pool = BONE_DATA.filter((b) => quizCategory === 'All' || b.category.trim().toLowerCase() === quizCategory.trim().toLowerCase());
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
      const shuffledNames = [...finalPool].sort(() => 0.5 - Math.random());
      setMatchingPairs({
        bones: [...finalPool],
        names: shuffledNames
      });
      setMatchingSlots({});
      setActiveDragItem(null);
      setSelectedWordForClickDrop(null);
    } else if (finalPool.length > 0) {
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
    SoundFX.select();
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

  // ==========================================
  // DRAG & DROP LOGIC FOR MATCHING MODE
  // ==========================================
  const handleDragStartWord = (e, nameEn) => {
    SoundFX.select();
    setActiveDragItem({ type: 'word', nameEn });
    e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'word', nameEn }));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragStartFromSlot = (e, boneId, nameEn) => {
    SoundFX.select();
    setActiveDragItem({ type: 'slot', fromBoneId: boneId, nameEn });
    e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'slot', fromBoneId: boneId, nameEn }));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOverTarget = (e, targetId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (hoveredDropTarget !== targetId) {
      setHoveredDropTarget(targetId);
    }
  };

  const handleDragLeaveTarget = (e, targetId) => {
    if (hoveredDropTarget === targetId) {
      setHoveredDropTarget(null);
    }
  };

  const handleDropOnSlot = (e, targetBoneId) => {
    e.preventDefault();
    setHoveredDropTarget(null);
    SoundFX.drop();

    let dragData = activeDragItem;
    if (!dragData) {
      try {
        const raw = e.dataTransfer.getData('text/plain');
        if (raw) dragData = JSON.parse(raw);
      } catch (err) {}
    }

    if (!dragData || !dragData.nameEn) return;

    const droppedWord = dragData.nameEn;
    const currentOccupant = matchingSlots[targetBoneId];

    setMatchingSlots((prev) => {
      const next = { ...prev };

      if (dragData.type === 'slot' && dragData.fromBoneId) {
        if (dragData.fromBoneId === targetBoneId) return prev;
        if (currentOccupant) {
          next[dragData.fromBoneId] = currentOccupant;
        } else {
          delete next[dragData.fromBoneId];
        }
      }

      next[targetBoneId] = droppedWord;
      return next;
    });

    setActiveDragItem(null);
    setSelectedWordForClickDrop(null);
  };

  const handleDropOnBank = (e) => {
    e.preventDefault();
    setHoveredDropTarget(null);
    SoundFX.drop();

    let dragData = activeDragItem;
    if (!dragData) {
      try {
        const raw = e.dataTransfer.getData('text/plain');
        if (raw) dragData = JSON.parse(raw);
      } catch (err) {}
    }

    if (dragData && dragData.type === 'slot' && dragData.fromBoneId) {
      setMatchingSlots((prev) => {
        const next = { ...prev };
        delete next[dragData.fromBoneId];
        return next;
      });
    }

    setActiveDragItem(null);
    setSelectedWordForClickDrop(null);
  };

  const handleClickWordInBank = (nameEn) => {
    SoundFX.select();
    if (selectedWordForClickDrop === nameEn) {
      setSelectedWordForClickDrop(null);
    } else {
      setSelectedWordForClickDrop(nameEn);
    }
  };

  const handleClickSlot = (boneId) => {
    if (selectedWordForClickDrop) {
      SoundFX.drop();
      setMatchingSlots(prev => ({ ...prev, [boneId]: selectedWordForClickDrop }));
      setSelectedWordForClickDrop(null);
    } else if (matchingSlots[boneId]) {
      SoundFX.click();
      setMatchingSlots(prev => {
        const next = { ...prev };
        delete next[boneId];
        return next;
      });
    }
  };

  const checkUnansweredAndFinish = () => {
    SoundFX.click();
    let unansweredCount = 0;
    if (examMode === 'matching') {
      unansweredCount = quizPool.filter((b) => !matchingSlots[b.id]).length;
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
    SoundFX.success();
    setShowEarlyExitModal(false);
    setShowUnansweredWarning(false);

    const finalAnswers = [];
    if (examMode === 'matching') {
      quizPool.forEach((bone) => {
        const chosen = matchingSlots[bone.id] || '';
        const isCorrect = chosen.trim().toLowerCase() === bone.nameEn.trim().toLowerCase();
        finalAnswers.push({
          boneId: bone.id,
          boneNameEn: bone.nameEn,
          chosenNameEn: chosen || '',
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
        let chosenText = '';

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

    finishAndAutoSaveResult(finalAnswers);
  };

  const finishAndAutoSaveResult = async (finalAnswers) => {
    const durationSec = Math.max(1, Math.floor((Date.now() - (quizStartTime || Date.now())) / 1000));
    const activeUser = playerName.trim() || user?.displayName || 'Student';
    const correctCount = finalAnswers.filter((a) => a.isCorrect).length;
    const totalCount = quizPool.length;
    const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

    const previousAttempts = scoreHistory.filter(
      (h) => (h.userEmail && user?.email ? h.userEmail === user.email : h.playerName.toLowerCase() === activeUser.toLowerCase()) && h.category === quizCategory
    );

    const attemptNumber = previousAttempts.length + 1;
    const firstAttemptScore = previousAttempts.length > 0 ? previousAttempts[previousAttempts.length - 1].score : correctCount;
    const firstAttemptTotal = previousAttempts.length > 0 ? previousAttempts[previousAttempts.length - 1].total : totalCount;

    const createdAtMs = Date.now();
    const timestampStr = new Date().toLocaleDateString('th-TH', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });

    const recordId = `ATT-${createdAtMs.toString().slice(-6)}`;
    const record = {
      id: recordId,
      createdAtMs,
      uid: user?.uid || 'authenticated',
      userEmail: user?.email || '',
      avatarId: customAvatar,
      playerName: activeUser,
      accountName: user?.displayName || '',
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

    setLatestResultRecord(record);
    setExpandedReviewIndex(null);
    setScreen('quiz-result');

    try {
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'anamy_score_history', recordId), record);
    } catch (err) {
      console.error("Auto Save Failed:", err);
    }
    setScoreHistory((prev) => [record, ...prev]);
  };

  const handleJumpToQuestion = (idx) => {
    SoundFX.click();
    setCurrentIndex(idx);
  };

  const currentQuizBone = quizPool[currentIndex];

  const renderAvatarIcon = (avatarId, sizeClass = "w-4 h-4") => {
    const current = AVATAR_OPTIONS.find(a => a.id === avatarId) || AVATAR_OPTIONS[0];
    const Comp = current.icon;
    return <Comp className={sizeClass} />;
  };

  const activeAvatarObj = AVATAR_OPTIONS.find(a => a.id === customAvatar) || AVATAR_OPTIONS[0];
  const draftAvatarObj = AVATAR_OPTIONS.find(a => a.id === draftAvatar) || AVATAR_OPTIONS[0];

  return (
    <div className={`min-h-screen font-sans pb-12 transition-colors duration-300 ${
      darkMode ? 'bg-[#121110] text-[#F3EFE6]' : 'bg-[#FAF7F2] text-[#2C2623]'
    }`}>
      {/* UNSAVED SETTINGS CONFIRMATION MODAL */}
      {showUnsavedSettingsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`rounded-3xl max-w-sm w-full p-6 space-y-4 shadow-2xl border-2 ${
            darkMode ? 'bg-[#1C1A18] border-[#38332E]' : 'bg-white border-[#E6E0D4]'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className={`text-base font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ยังไม่ได้บันทึกการตั้งค่า</h3>
              <p className="text-xs text-[#9E948A]">
                คุณได้เลือกไอคอนใหม่ไว้ ต้องการบันทึกก่อนย้อนกลับหรือไม่?
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onMouseEnter={() => SoundFX.hover()}
                onClick={handleSaveAndLeaveSettings}
                className="w-full py-3 rounded-xl bg-[#C86D51] text-white text-xs font-bold hover:bg-[#b05b41] transition-all cursor-pointer shadow-xs"
              >
                บันทึกแล้วกลับหน้าหลัก
              </button>
              <button
                onMouseEnter={() => SoundFX.hover()}
                onClick={handleDiscardAndLeaveSettings}
                className={`w-full py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  darkMode ? 'bg-[#292522] text-[#E6E0D4] hover:bg-[#38332E]' : 'bg-[#F3EFE6] text-[#2C2623] hover:bg-[#E6E0D4]'
                }`}
              >
                ไม่บันทึก (ละทิ้งการเปลี่ยนแปลง)
              </button>
              <button
                onMouseEnter={() => SoundFX.hover()}
                onClick={() => { SoundFX.click(); setShowUnsavedSettingsModal(false); }}
                className="w-full py-2 text-xs font-bold text-[#9E948A] hover:text-[#C86D51] cursor-pointer"
              >
                อยู่หน้านี้ต่อ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 1. SIGN OUT CONFIRMATION MODAL */}
      {showSignOutModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`rounded-3xl max-w-sm w-full p-6 space-y-4 shadow-2xl border-2 ${
            darkMode ? 'bg-[#1C1A18] border-[#38332E]' : 'bg-white border-[#E6E0D4]'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-[#FCEEEE] text-[#C94A4A] flex items-center justify-center mx-auto">
              <LogOut className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className={`text-base font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ยืนยันการออกจากระบบ?</h3>
              <p className="text-xs text-[#9E948A]">
                คุณต้องการออกจากบัญชี Google ({user?.email}) ใช่หรือไม่?
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => { SoundFX.click(); setShowSignOutModal(false); }}
                className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  darkMode ? 'bg-[#292522] text-[#E6E0D4] hover:bg-[#38332E]' : 'bg-[#F3EFE6] text-[#2C2623] hover:bg-[#E6E0D4]'
                }`}
              >
                ยกเลิก
              </button>
              <button
                onClick={handleConfirmSignOut}
                className="flex-1 py-3 rounded-xl bg-[#C94A4A] text-white text-xs font-bold hover:bg-red-600 transition-all cursor-pointer shadow-xs"
              >
                ออกจากระบบ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. MANDATORY LOGIN PROMPT MODAL */}
      {showLoginPromptModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`rounded-3xl max-w-md w-full p-6 sm:p-7 space-y-5 shadow-2xl border-2 border-[#C86D51] ${
            darkMode ? 'bg-[#1C1A18]' : 'bg-white'
          }`}>
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mx-auto shadow-xs ${
              darkMode ? 'bg-[#292522] border-[#38332E]' : 'bg-[#FAF7F2] border-[#E6E0D4]'
            }`}>
              <Lock className="w-7 h-7 text-[#C86D51]" />
            </div>
            <div className="text-center space-y-2">
              <h3 className={`text-lg font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>กรุณาเข้าสู่ระบบก่อนทำแบบทดสอบ</h3>
              <p className="text-xs text-[#9E948A] leading-relaxed">
                ระบบบังคับให้เข้าสู่ระบบผ่าน Google เพื่อบันทึกประวัติคะแนนอย่างแม่นยำ ป้องกันการสวมรอย และใช้ตรวจสอบผลสอบ
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <button
                onClick={handleGoogleSignIn}
                disabled={isSigningIn}
                className={`w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl border-2 font-extrabold text-sm hover:-translate-y-0.5 active:translate-y-0 shadow-sm transition-all cursor-pointer ${
                  darkMode ? 'bg-[#292522] border-[#C86D51] text-white' : 'bg-white border-[#2C2623] text-[#2C2623]'
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>{isSigningIn ? 'กำลังเชื่อมต่อ...' : 'เข้าสู่ระบบด้วย Google ทันที'}</span>
              </button>

              <button
                onClick={() => { SoundFX.click(); setShowLoginPromptModal(false); }}
                className="w-full py-2.5 text-xs font-bold text-[#9E948A] hover:text-[#C86D51] cursor-pointer"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOP NAVBAR */}
      <header className={`sticky top-0 z-30 border-b backdrop-blur-md transition-colors ${
        darkMode ? 'border-[#2C2723] bg-[#161413]/95' : 'border-[#E6E0D4] bg-[#FFFDF9]/95'
      }`}>
        <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <button
            onClick={() => {
              SoundFX.click();
              if (screen === 'quiz-play') setShowEarlyExitModal(true);
              else setScreen('home');
            }}
            className="flex items-center gap-2 sm:gap-3 text-left group hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-w-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#C86D51] flex items-center justify-center text-white shadow-xs shrink-0">
              <Bone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h1 className={`text-base sm:text-xl md:text-2xl font-black tracking-tight truncate ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>Anamy Game</h1>
              <p className="text-[10px] sm:text-xs text-[#9E948A] truncate hidden xs:block">ระบบทดสอบโครงกระดูกมนุษย์</p>
            </div>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={toggleSound}
              onMouseEnter={() => SoundFX.hover()}
              title={soundOn ? 'ปิดเสียงเอฟเฟกต์' : 'เปิดเสียงเอฟเฟกต์'}
              className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-[#221F1C] border-[#38332E] text-[#E6E0D4] hover:bg-[#2C2723]'
                  : 'bg-white border-[#E6E0D4] text-[#2C2623] hover:bg-[#FAF7F2]'
              }`}
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C86D51]" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9E948A]" />}
            </button>

            <button
              onClick={toggleTheme}
              onMouseEnter={() => SoundFX.hover()}
              title={darkMode ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด'}
              className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-[#221F1C] border-[#38332E] text-amber-400 hover:bg-[#2C2723]'
                  : 'bg-white border-[#E6E0D4] text-neutral-600 hover:bg-[#FAF7F2]'
              }`}
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            {screen === 'quiz-play' ? (
              <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#FCEEEE] text-[#C94A4A] text-[11px] sm:text-xs font-extrabold shadow-xs">
                <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="hidden xs:inline">กำลังสอบ</span>
              </div>
            ) : (
              <>
                {user ? (
                  <button
                    onClick={handleOpenSettings}
                    onMouseEnter={() => SoundFX.hover()}
                    title="คลิกเพื่อจัดการโปรไฟล์และการตั้งค่า"
                    className={`flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group ${
                      darkMode ? 'bg-[#221F1C] hover:bg-[#2C2723] border-[#38332E]' : 'bg-[#F3EFE6] hover:bg-[#E6E0D4] border-[#E6E0D4]'
                    }`}
                  >
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg sm:rounded-xl ${activeAvatarObj.bg} text-white flex items-center justify-center shadow-xs shrink-0`}>
                      {renderAvatarIcon(customAvatar, "w-3 h-3 sm:w-3.5 sm:h-3.5")}
                    </div>
                    <div className="text-left hidden md:block">
                      <div className={`text-xs font-black max-w-[110px] lg:max-w-[130px] truncate leading-tight ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                        {playerName || user.displayName || 'ผู้สอบ'}
                      </div>
                      <div className="text-[10px] text-[#9E948A] leading-tight">ตั้งค่าโปรไฟล์</div>
                    </div>
                    <Settings className="w-3.5 h-3.5 text-[#9E948A] group-hover:rotate-45 transition-transform shrink-0" />
                  </button>
                ) : (
                  <button
                    onClick={handleGoogleSignIn}
                    onMouseEnter={() => SoundFX.hover()}
                    disabled={isSigningIn}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-extrabold border hover:-translate-y-0.5 active:translate-y-0 shadow-xs transition-all cursor-pointer ${
                      darkMode ? 'bg-[#221F1C] border-[#38332E] text-white hover:bg-[#2C2723]' : 'bg-white border-[#E6E0D4] text-[#2C2623] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span className="hidden sm:inline">{isSigningIn ? 'เชื่อมต่อ...' : 'ล็อกอิน Google'}</span>
                    <span className="sm:hidden">{isSigningIn ? '...' : 'ล็อกอิน'}</span>
                  </button>
                )}

                {screen !== 'home' && (
                  <button
                    onClick={() => {
                      if (screen === 'settings') {
                        handleAttemptLeaveSettings();
                      } else {
                        SoundFX.click();
                        setScreen('home');
                      }
                    }}
                    onMouseEnter={() => SoundFX.hover()}
                    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#C86D51] text-white text-xs font-bold hover:-translate-y-0.5 active:translate-y-0 shadow-xs transition-all cursor-pointer"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">หน้าหลัก</span>
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-3 sm:px-4 pt-4 sm:pt-6">
        {screen === 'home' && (
          <div className="space-y-6">
            <div className={`border rounded-3xl p-6 sm:p-8 shadow-xs space-y-5 transition-colors ${
              darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-[#FFFFFF] border-[#E6E0D4]'
            }`}>
              <div>
                <h2 className={`text-2xl sm:text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                  Hello welcome to Anamy Game
                </h2>
                <p className="text-xs sm:text-sm text-[#9E948A] mt-1">
                  {user 
                    ? `เข้าสู่ระบบเรียบร้อยด้วยบัญชี: ${user.email}`
                    : '⚠️ บังคับเข้าสู่ระบบ Google ที่ปุ่มด้านบนขวาก่อนเริ่มทำการทดสอบ'}
                </p>
              </div>

              <div className={`border rounded-2xl p-4 ${
                darkMode ? 'bg-[#221F1C] border-[#38332E]' : 'bg-[#FAF7F2] border-[#E6E0D4]'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <label className={`text-xs font-extrabold flex items-center gap-2 ${darkMode ? 'text-neutral-200' : 'text-[#2C2623]'}`}>
                    <div className={`w-5 h-5 rounded-lg ${activeAvatarObj.bg} text-white flex items-center justify-center`}>
                      {renderAvatarIcon(customAvatar, "w-3 h-3")}
                    </div>
                    <span>ชื่อผู้เข้าสอบในรอบนี้ / รหัสนักศึกษา:</span>
                  </label>
                  {user ? (
                    <button 
                      onClick={handleOpenSettings} 
                      className="text-[11px] text-[#C86D51] hover:underline font-bold cursor-pointer"
                    >
                      เปลี่ยนไอคอนโปรไฟล์
                    </button>
                  ) : (
                    <span className="text-[11px] text-[#C94A4A] font-bold">* ยังไม่ได้ล็อกอิน</span>
                  )}
                </div>
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder={user ? "ระบุชื่อหรือรหัสนักศึกษา..." : "กรุณากดล็อกอิน Google ด้านบนก่อน..."}
                  disabled={!user}
                  className={`w-full border rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#C86D51] transition-colors ${
                    darkMode ? 'bg-[#181615] text-white border-[#38332E]' : 'bg-white text-[#2C2623] border-[#E6E0D4]'
                  } ${nameInputError ? 'border-[#C94A4A]' : ''} ${!user ? 'cursor-not-allowed opacity-60' : ''}`}
                />
                {nameInputError && (
                  <p className="text-xs font-extrabold text-[#C94A4A] mt-2">
                    กรุณากรอกชื่อก่อนเริ่มทำแบบทดสอบ
                  </p>
                )}
                {!user && (
                  <p className="text-xs font-bold text-[#C86D51] mt-2 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>กรุณากดล็อกอินด้วย Google ที่มุมขวาบนเพื่อเริ่มใช้งาน</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onMouseEnter={() => SoundFX.hover()}
                onClick={() => {
                  SoundFX.select();
                  if (!user) {
                    setShowLoginPromptModal(true);
                    return;
                  }
                  setSelectedHomeMenu(selectedHomeMenu === 'quiz-setup' ? null : 'quiz-setup');
                }}
                className={`rounded-3xl p-6 text-left border-2 transition-all flex items-start gap-4 hover:-translate-y-1 active:translate-y-0 shadow-sm cursor-pointer ${
                  selectedHomeMenu === 'quiz-setup'
                    ? darkMode ? 'bg-[#26211D] border-[#C86D51] ring-4 ring-[#C86D51]/20' : 'bg-[#FFFDF9] border-[#C86D51] ring-4 ring-[#C86D51]/15'
                    : darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C86D51] text-white flex items-center justify-center shrink-0">
                  <Play className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className={`text-lg font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>เริ่มทำแบบทดสอบ</h3>
                  <p className="text-xs text-[#9E948A]">
                    {user ? 'เข้าสอบจริง บันทึกคะแนนลงประวัติทันที' : 'ต้องเข้าสู่ระบบ Google ก่อนเริ่ม'}
                  </p>
                </div>
              </button>

              <button
                onMouseEnter={() => SoundFX.hover()}
                onClick={() => {
                  SoundFX.select();
                  setSelectedHomeMenu(selectedHomeMenu === 'history' ? null : 'history');
                }}
                className={`rounded-3xl p-6 text-left border-2 transition-all flex items-start gap-4 hover:-translate-y-1 active:translate-y-0 shadow-sm cursor-pointer ${
                  selectedHomeMenu === 'history'
                    ? darkMode ? 'bg-[#26211D] border-[#C86D51] ring-4 ring-[#C86D51]/20' : 'bg-[#FFFDF9] border-[#C86D51] ring-4 ring-[#C86D51]/15'
                    : darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-[#292522] text-[#F3EFE6]' : 'bg-[#F3EFE6] text-[#2C2623]'
                }`}>
                  <History className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-lg font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ประวัติคะแนนย้อนหลัง</h3>
                  <p className="text-xs text-[#9E948A]">ตรวจสอบคะแนนทุกรอบ และคลิกดูข้อสอบพร้อมรูปภาพ</p>
                </div>
              </button>
            </div>

            {selectedHomeMenu && (
              <div className="flex justify-end pt-2">
                <button
                  onMouseEnter={() => SoundFX.hover()}
                  onClick={handleConfirmHomeMenu}
                  className="px-8 py-4 rounded-2xl bg-[#C86D51] text-white font-extrabold shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Check className="w-5 h-5" />
                  <span>ยืนยันการเลือกเมนู</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* SETTINGS / PROFILE SCREEN */}
        {screen === 'settings' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <button
                onMouseEnter={() => SoundFX.hover()}
                onClick={handleAttemptLeaveSettings}
                className="text-xs font-bold text-[#9E948A] hover:underline cursor-pointer flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>กลับหน้าหลัก</span>
              </button>
              <h2 className={`text-lg font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ตั้งค่าโปรไฟล์ & บัญชีผู้ใช้</h2>
              <div className="w-12"></div>
            </div>

            {settingsSavedToast && (
              <div className="bg-[#ECFDF5] border border-[#10B981] text-[#059669] px-4 py-3 rounded-2xl text-xs font-extrabold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>บันทึกไอคอนโปรไฟล์เรียบร้อยแล้ว!</span>
              </div>
            )}

            <div className={`border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs ${
              darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
            }`}>
              <div className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                darkMode ? 'bg-[#221F1C] border-[#38332E]' : 'bg-[#FAF7F2] border-[#E6E0D4]'
              }`}>
                <div className={`w-14 h-14 rounded-2xl ${draftAvatarObj.bg} text-white flex items-center justify-center shrink-0 shadow-sm transition-colors duration-200`}>
                  {renderAvatarIcon(draftAvatar, "w-7 h-7")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-black text-base truncate ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                    {playerName || user?.displayName || 'ผู้สอบ'}
                  </h3>
                  <p className="text-xs text-[#9E948A] truncate">{user?.email || 'ไม่มีอีเมล'}</p>
                  <span className="inline-block mt-1 text-[10px] bg-[#ECFDF5] text-[#059669] px-2 py-0.5 rounded-full font-bold">
                    ✓ บัญชี Google ยืนยันแล้ว
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className={`block text-xs font-extrabold ${darkMode ? 'text-neutral-200' : 'text-[#2C2623]'}`}>
                    เลือกไอคอน Role ประจำตัว (Custom Avatar):
                  </label>
                  {draftAvatar !== customAvatar && (
                    <span className="text-[11px] text-[#C86D51] font-bold">* ยังไม่ได้กดบันทึก</span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {AVATAR_OPTIONS.map((av) => {
                    const IconComp = av.icon;
                    const isSelected = draftAvatar === av.id;
                    return (
                      <button
                        key={av.id}
                        type="button"
                        onMouseEnter={() => SoundFX.hover()}
                        onClick={() => {
                          SoundFX.select();
                          setDraftAvatar(av.id);
                        }}
                        className={`p-3 rounded-2xl border-2 flex items-center gap-3 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#C86D51] bg-[#C86D51]/10 ring-2 ring-[#C86D51]/30 shadow-xs'
                            : darkMode
                            ? 'border-[#38332E] bg-[#221F1C] hover:bg-[#2A2623]'
                            : 'border-[#E6E0D4] bg-white hover:bg-[#FAF7F2]'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl ${av.bg} text-white flex items-center justify-center shrink-0`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <div className={`text-xs font-bold ${darkMode ? 'text-neutral-200' : 'text-[#2C2623]'}`}>{av.label}</div>
                          {isSelected && <span className="text-[10px] text-[#C86D51] font-black">Selected</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onMouseEnter={() => SoundFX.hover()}
                  onClick={handleSaveSettings}
                  className="flex-1 py-3.5 rounded-2xl bg-[#C86D51] text-white font-extrabold text-xs shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>บันทึกการตั้งค่าไอคอน</span>
                </button>
                <button
                  onMouseEnter={() => SoundFX.hover()}
                  onClick={() => { SoundFX.click(); setShowSignOutModal(true); }}
                  className="py-3.5 px-6 rounded-2xl bg-[#FCEEEE] text-[#C94A4A] font-extrabold text-xs hover:bg-red-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>ออกจากระบบ</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {screen === 'quiz-setup' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <button onClick={() => { SoundFX.click(); setScreen('home'); }} className="text-xs font-bold text-[#9E948A] hover:underline cursor-pointer">
              ← กลับหน้าหลัก
            </button>
            
            {setupStep === 1 && (
              <div className={`border rounded-3xl p-6 space-y-6 ${
                darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
              }`}>
                <div>
                  <h2 className={`text-xl font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ขั้นตอนที่ 1: เลือกระบบการสอบ</h2>
                  <p className="text-xs text-[#9E948A] mt-1">กรุณาเลือกรูปแบบข้อสอบที่คุณต้องการทดสอบ</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => { SoundFX.select(); setExamMode('mcq'); }}
                    className={`p-5 rounded-2xl border-2 text-left flex flex-col gap-4 transition-all hover:-translate-y-1 active:translate-y-0 cursor-pointer ${
                      examMode === 'mcq'
                        ? 'border-[#C86D51] bg-[#C86D51]/10 ring-4 ring-[#C86D51]/10 shadow-sm'
                        : darkMode ? 'border-[#38332E] bg-[#221F1C]' : 'border-[#E6E0D4] bg-white'
                    }`}
                  >
                    <div className={`w-full h-28 rounded-xl flex items-center justify-center overflow-hidden border ${
                      darkMode ? 'bg-[#292522] border-[#38332E]' : 'bg-[#F3EFE6] border-[#E6E0D4]'
                    }`}>
                      <div className="space-y-1.5 w-3/4">
                        <div className="h-2 w-full bg-[#C86D51] rounded-full"></div>
                        <div className="h-2 w-2/3 bg-[#9E948A] rounded-full"></div>
                        <div className="h-2 w-1/2 bg-[#9E948A] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-extrabold text-sm ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ปรนัย (MCQ)</h3>
                      <p className="text-[11px] text-[#9E948A]">เลือกช้อยส์ A, B, C, D ที่ถูกต้อง</p>
                    </div>
                  </button>

                  <button
                    onClick={() => { SoundFX.select(); setExamMode('fill'); }}
                    className={`p-5 rounded-2xl border-2 text-left flex flex-col gap-4 transition-all hover:-translate-y-1 active:translate-y-0 cursor-pointer ${
                      examMode === 'fill'
                        ? 'border-[#C86D51] bg-[#C86D51]/10 ring-4 ring-[#C86D51]/10 shadow-sm'
                        : darkMode ? 'border-[#38332E] bg-[#221F1C]' : 'border-[#E6E0D4] bg-white'
                    }`}
                  >
                    <div className={`w-full h-28 rounded-xl flex items-center justify-center overflow-hidden border ${
                      darkMode ? 'bg-[#292522] border-[#38332E]' : 'bg-[#F3EFE6] border-[#E6E0D4]'
                    }`}>
                      <div className={`w-3/4 border rounded-lg p-2 text-[10px] font-bold shadow-xs ${
                        darkMode ? 'bg-[#181615] border-[#38332E] text-neutral-400' : 'bg-white border-[#2C2623] text-[#786F68]'
                      }`}>
                        Type here...
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-extrabold text-sm ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>เติมคำ (Fill-in)</h3>
                      <p className="text-[11px] text-[#9E948A]">พิมพ์ชื่อกระดูกภาษาอังกฤษด้วยตนเอง</p>
                    </div>
                  </button>

                  <button
                    onClick={() => { SoundFX.select(); setExamMode('matching'); }}
                    className={`p-5 rounded-2xl border-2 text-left flex flex-col gap-4 transition-all hover:-translate-y-1 active:translate-y-0 cursor-pointer ${
                      examMode === 'matching'
                        ? 'border-[#C86D51] bg-[#C86D51]/10 ring-4 ring-[#C86D51]/10 shadow-sm'
                        : darkMode ? 'border-[#38332E] bg-[#221F1C]' : 'border-[#E6E0D4] bg-white'
                    }`}
                  >
                    <div className={`w-full h-28 rounded-xl flex items-center justify-center overflow-hidden border ${
                      darkMode ? 'bg-[#292522] border-[#38332E]' : 'bg-[#F3EFE6] border-[#E6E0D4]'
                    }`}>
                      <div className="flex flex-col gap-2 w-3/4 justify-center items-center">
                        <div className="w-10 h-8 rounded-lg bg-[#C86D51]/30 border border-[#C86D51] flex items-center justify-center text-[9px] font-bold">IMAGE</div>
                        <div className="w-8 h-4 rounded-md bg-[#10B981] text-white flex items-center justify-center text-[8px] font-bold">DRAG</div>
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-extrabold text-sm ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>จับคู่ (Drag & Drop)</h3>
                      <p className="text-[11px] text-[#9E948A]">ลากคำศัพท์ด้านล่างไปวางในกล่องรูปด้านบน</p>
                    </div>
                  </button>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => { SoundFX.click(); setSetupStep(2); }}
                    className="px-8 py-3.5 rounded-2xl bg-[#C86D51] text-white font-extrabold text-sm flex items-center gap-2 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    <span>ถัดไป: เลือกส่วนที่จะสอบ</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {setupStep === 2 && (
              <div className={`border rounded-3xl p-6 space-y-6 ${
                darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className={`text-xl font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ขั้นตอนที่ 2: เลือกหมวดหมู่กระดูก</h2>
                    <p className="text-xs text-[#9E948A] mt-1">เลือกส่วนของร่างกายที่ต้องการทดสอบ</p>
                  </div>
                  <button
                    onClick={() => { SoundFX.click(); setSetupStep(1); }}
                    className="text-xs font-bold text-[#C86D51] hover:underline cursor-pointer"
                  >
                    ← เปลี่ยนรูปแบบสอบ
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CATEGORIES.map((cat) => {
                    const IconComp = cat.icon;
                    const isSelected = quizCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => { SoundFX.select(); setQuizCategory(cat.id); }}
                        className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                          isSelected
                            ? 'border-2 border-[#C86D51] bg-[#C86D51]/10 shadow-sm'
                            : darkMode ? 'border-[#38332E] bg-[#221F1C]' : 'border-[#E6E0D4] bg-white'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#C86D51] text-white' : darkMode ? 'bg-[#2E2925] text-[#E6E0D4]' : 'bg-[#F3EFE6] text-[#2C2623]'
                        }`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={`font-extrabold text-sm ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>{cat.nameEn}</div>
                          <div className="text-xs text-[#C86D51] font-bold">{cat.nameTh}</div>
                          <p className="text-[11px] text-[#9E948A] mt-1 leading-relaxed">{cat.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleStartQuizSession}
                  className="w-full py-4 rounded-2xl bg-[#C86D51] text-white font-extrabold text-base shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className={`border-2 border-[#EF4444] rounded-3xl max-w-md w-full p-6 space-y-4 shadow-xl ${
                  darkMode ? 'bg-[#1C1A18]' : 'bg-white'
                }`}>
                  <h3 className={`text-base font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ยุติการสอบก่อนกำหนด?</h3>
                  <p className="text-xs text-[#EF4444]">ข้อที่เหลือจะถูกคิดเป็น 0 คะแนนและบันทึกผลทันที</p>
                  <div className="flex gap-2">
                    <button onClick={() => { SoundFX.click(); setShowEarlyExitModal(false); }} className="flex-1 py-3 rounded-xl bg-neutral-600 text-white text-xs font-bold hover:bg-neutral-700 transition-all cursor-pointer">ทำต่อ</button>
                    <button onClick={processFinalSubmission} className="flex-1 py-3 rounded-xl bg-[#EF4444] text-white text-xs font-bold hover:bg-red-600 transition-all cursor-pointer">ยอมรับและตรวจผล</button>
                  </div>
                </div>
              </div>
            )}

            {showUnansweredWarning && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className={`border-2 border-[#C86D51] rounded-3xl max-w-md w-full p-6 space-y-4 shadow-xl ${
                  darkMode ? 'bg-[#1C1A18]' : 'bg-white'
                }`}>
                  <h3 className={`text-base font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>⚠️ มีข้อที่ยังไม่ได้ตอบ</h3>
                  <p className="text-xs text-[#9E948A]">คุณยังทำข้อสอบไม่ครบทุกข้อ ต้องการส่งตรวจและบันทึกคะแนนเลยหรือไม่?</p>
                  <div className="flex gap-2">
                    <button onClick={() => { SoundFX.click(); setShowUnansweredWarning(false); }} className="flex-1 py-3 rounded-xl bg-neutral-600 text-white text-xs font-bold hover:bg-neutral-700 transition-all cursor-pointer">กลับไปทำต่อ</button>
                    <button onClick={processFinalSubmission} className="flex-1 py-3 rounded-xl bg-[#C86D51] text-white text-xs font-bold hover:bg-[#b05b41] transition-all cursor-pointer">ยืนยันตรวจและบันทึก</button>
                  </div>
                </div>
              </div>
            )}

            {/* TOP PROGRESS BAR */}
            <div className={`border rounded-2xl p-3 sm:p-4 space-y-2.5 sm:space-y-3 shadow-xs ${
              darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
            }`}>
              <div className="flex justify-between items-center gap-2">
                <span className={`text-xs sm:text-sm font-extrabold truncate ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                  {examMode === 'matching' ? `โหมดจับคู่ (${Object.keys(matchingSlots).length}/${quizPool.length} ตอบแล้ว)` : `ข้อที่ ${currentIndex + 1} / ${quizPool.length}`}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => { SoundFX.click(); setShowEarlyExitModal(true); }} 
                    className="px-3 sm:px-3.5 py-1.5 sm:py-2 bg-[#C86D51] text-white rounded-xl text-[11px] sm:text-xs font-extrabold shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    ส่งข้อสอบ / บันทึกผล
                  </button>
                </div>
              </div>

              {examMode !== 'matching' && (
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 max-h-24 sm:max-h-36 overflow-y-auto">
                  {quizPool.map((_, idx) => {
                    const isAnswered = answersMap[idx] !== undefined && answersMap[idx] !== '';
                    const isCurrent = currentIndex === idx;
                    let btnColor = darkMode ? 'bg-[#292522] text-[#9E948A]' : 'bg-[#E6E0D4] text-[#786F68]';
                    if (isAnswered) {
                      btnColor = 'bg-[#10B981] text-white';
                    } else if (isCurrent) {
                      btnColor = darkMode ? 'bg-white text-black ring-2 ring-[#C86D51]' : 'bg-[#2C2623] text-white ring-2 ring-[#C86D51]';
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleJumpToQuestion(idx)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-extrabold flex items-center justify-center transition-all hover:scale-105 cursor-pointer ${btnColor}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* MAIN EXAM CONTENT */}
            {examMode === 'matching' ? (() => {
              const assignedWords = Object.values(matchingSlots);
              const unassignedItems = matchingPairs.names.filter(item => !assignedWords.includes(item.nameEn));

              return (
                <div className="space-y-4 sm:space-y-6">
                  {/* TOP SECTION: LARGE BONE IMAGES WITH SLOTS UNDERNEATH */}
                  <div className={`border rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 shadow-xs ${
                    darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
                  }`}>
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm sm:text-base font-black ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                        1. โครงกระดูกข้อสอบ
                      </h3>
                      <span className="text-[11px] text-[#9E948A] sm:hidden">แตะคำศัพท์ด้านล่างแล้วแตะช่องนี้</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-1">
                      {matchingPairs.bones.map((bone, bIdx) => {
                        const assignedAnswer = matchingSlots[bone.id];
                        const isHovered = hoveredDropTarget === bone.id;

                        return (
                          <div
                            key={bone.id}
                            className={`border-2 rounded-2xl p-3 flex flex-col justify-between transition-all ${
                              isHovered
                                ? 'border-[#C86D51] ring-4 ring-[#C86D51]/30 scale-[1.02]'
                                : assignedAnswer
                                ? darkMode ? 'border-[#10B981] bg-[#10B981]/5' : 'border-[#10B981] bg-[#ECFDF5]/50'
                                : darkMode ? 'border-[#38332E] bg-[#221F1C]' : 'border-[#E6E0D4] bg-[#FAF7F2]'
                            }`}
                          >
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-[#C86D51] text-white">
                                ข้อ #{bIdx + 1}
                              </span>
                            </div>

                            <div className={`w-full h-36 sm:h-44 rounded-xl flex items-center justify-center p-2 mb-2 sm:mb-3 ${
                              darkMode ? 'bg-[#181615]' : 'bg-white'
                            }`}>
                              {!imageLoadFailed[bone.id] ? (
                                <img
                                  src={bone.imageUrl}
                                  alt={`Bone ${bone.num}`}
                                  className="max-h-full max-w-full object-contain"
                                  onError={(e) => {
                                    handleSafeImageFallback(e, bone.imageUrl);
                                    setTimeout(() => {
                                      if (e.target.naturalWidth === 0) {
                                        setImageLoadFailed(prev => ({ ...prev, [bone.id]: true }));
                                      }
                                    }, 200);
                                  }}
                                />
                              ) : (
                                <div className="text-[11px] text-[#9E948A] text-center font-bold">
                                  {bone.nameEn}
                                </div>
                              )}
                            </div>

                            {/* DROP TARGET SLOT UNDER IMAGE */}
                            <div
                              onDragOver={(e) => handleDragOverTarget(e, bone.id)}
                              onDragLeave={(e) => handleDragLeaveTarget(e, bone.id)}
                              onDrop={(e) => handleDropOnSlot(e, bone.id)}
                              onClick={() => handleClickSlot(bone.id)}
                              className={`w-full min-h-[46px] rounded-xl border-2 border-dashed flex items-center justify-center p-2 text-center cursor-pointer transition-all ${
                                assignedAnswer
                                  ? 'border-solid border-[#10B981] bg-[#10B981] text-white font-extrabold shadow-xs hover:bg-[#059669]'
                                  : isHovered
                                  ? 'border-[#C86D51] bg-[#C86D51]/15 text-[#C86D51] font-bold'
                                  : selectedWordForClickDrop
                                  ? 'border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6] font-bold ring-2 ring-[#3B82F6]/30 animate-pulse'
                                  : darkMode ? 'border-[#4A433D] text-[#9E948A] hover:border-[#C86D51]' : 'border-[#C4B8AB] text-[#786F68] hover:border-[#C86D51]'
                              }`}
                            >
                              {assignedAnswer ? (
                                <div
                                  draggable
                                  onDragStart={(e) => handleDragStartFromSlot(e, bone.id, assignedAnswer)}
                                  className="flex items-center gap-1.5 justify-center w-full"
                                  title="ลากออกเพื่อยกเลิก หรือคลิกเพื่อเอาคำตอบออก"
                                >
                                  <GripHorizontal className="w-3.5 h-3.5 opacity-80 shrink-0" />
                                  <span className="text-xs truncate font-black">{assignedAnswer}</span>
                                </div>
                              ) : (
                                <span className="text-[11px] font-bold">
                                  {isHovered ? 'ปล่อยเพื่อวาง' : selectedWordForClickDrop ? 'แตะที่นี่เพื่อวาง' : 'ลากหรือแตะวางที่นี่'}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* BOTTOM SECTION: DRAGGABLE VOCABULARY BANK */}
                  <div
                    onDragOver={(e) => handleDragOverTarget(e, 'bank')}
                    onDragLeave={(e) => handleDragLeaveTarget(e, 'bank')}
                    onDrop={handleDropOnBank}
                    className={`border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-xs transition-all ${
                      hoveredDropTarget === 'bank'
                        ? 'border-[#EF4444] bg-[#EF4444]/10'
                        : darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                      <div>
                        <h3 className={`text-sm sm:text-base font-black ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                          2. รายการคำศัพท์ (Word Bank)
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#9E948A]">
                          ลากคำศัพท์หรือแตะเลือกคำศัพท์ไปใส่ในช่องใต้ภาพ (แตะซ้ำหรือลากกลับเพื่อยกเลิก)
                        </p>
                      </div>
                      {selectedWordForClickDrop && (
                        <div className="text-[11px] sm:text-xs bg-[#3B82F6] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl font-bold flex items-center justify-between gap-2 self-start sm:self-auto">
                          <span>กำลังเลือก: {selectedWordForClickDrop}</span>
                          <button onClick={() => setSelectedWordForClickDrop(null)} className="underline cursor-pointer">ยกเลิก</button>
                        </div>
                      )}
                    </div>

                    <div className={`min-h-[64px] sm:min-h-[70px] p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-dashed flex flex-wrap items-center gap-2 sm:gap-3 ${
                      darkMode ? 'bg-[#221F1C] border-[#38332E]' : 'bg-[#FAF7F2] border-[#E6E0D4]'
                    }`}>
                      {unassignedItems.length === 0 ? (
                        <div className="w-full text-center py-2 text-xs font-bold text-[#10B981] flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>จับคู่คำศัพท์ครบทุกข้อแล้ว ตรวจทานความถูกต้องแล้วส่งคำตอบได้ทันที</span>
                        </div>
                      ) : (
                        unassignedItems.map((item) => {
                          const isSelected = selectedWordForClickDrop === item.nameEn;
                          return (
                            <div
                              key={item.id}
                              draggable
                              onDragStart={(e) => handleDragStartWord(e, item.nameEn)}
                              onClick={() => handleClickWordInBank(item.nameEn)}
                              onMouseEnter={() => SoundFX.hover()}
                              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border-2 font-black text-xs flex items-center gap-1.5 sm:gap-2 cursor-grab active:cursor-grabbing hover:-translate-y-0.5 active:translate-y-0 shadow-xs transition-all select-none ${
                                isSelected
                                  ? 'bg-[#3B82F6] text-white border-[#3B82F6] ring-4 ring-[#3B82F6]/30'
                                  : darkMode
                                  ? 'bg-[#292522] border-[#4A433D] text-white hover:border-[#C86D51]'
                                  : 'bg-white border-[#E6E0D4] text-[#2C2623] hover:border-[#C86D51]'
                              }`}
                            >
                              <GripHorizontal className="w-3.5 h-3.5 text-[#9E948A] shrink-0" />
                              <span>{item.nameEn}</span>
                            </div>
                          );
                        })
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={checkUnansweredAndFinish}
                        className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#C86D51] text-white font-extrabold text-sm shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        <span>ส่งตรวจคำตอบโหมดจับคู่ ({Object.keys(matchingSlots).length}/{quizPool.length} ข้อ)</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })() : (
              currentQuizBone && (() => {
                const options = questionOptionsMap[currentIndex] || [];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                    <div className={`lg:col-span-6 border rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center justify-center min-h-[260px] sm:min-h-[340px] shadow-xs ${
                      darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
                    }`}>
                      {currentQuizBone.imageUrl && !imageLoadFailed[currentQuizBone.id] ? (
                        <img
                          src={currentQuizBone.imageUrl}
                          alt={`Question ${currentQuizBone.num}`}
                          className="max-h-[240px] sm:max-h-[320px] w-auto object-contain rounded-xl sm:rounded-2xl"
                          onError={(e) => {
                            handleSafeImageFallback(e, currentQuizBone.imageUrl);
                            setTimeout(() => {
                              if (e.target.naturalWidth === 0) {
                                setImageLoadFailed((prev) => ({ ...prev, [currentQuizBone.id]: true }));
                              }
                            }, 200);
                          }}
                        />
                      ) : (
                        <div className="text-xs text-[#9E948A]">ไม่พบรูปภาพ ({currentQuizBone.nameEn})</div>
                      )}
                    </div>

                    <div className={`lg:col-span-6 border rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 flex flex-col justify-between shadow-xs ${
                      darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
                    }`}>
                      <div className="space-y-3 sm:space-y-4">
                        <h2 className={`text-base sm:text-lg font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                          {examMode === 'fill' ? 'พิมพ์ชื่อภาษาอังกฤษของกระดูกในภาพ:' : 'กระดูกส่วนที่ไฮไลท์สีเหลืองในภาพคือข้อใด?'}
                        </h2>

                        {examMode === 'mcq' ? (
                          <div className="space-y-2.5 sm:space-y-3">
                            {options.map((option, idx) => {
                              const isSelected = answersMap[currentIndex]?.id === option.id;
                              return (
                                <button
                                  key={option.id}
                                  onMouseEnter={() => SoundFX.hover()}
                                  onClick={() => handleSelectOption(option)}
                                  className={`w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left flex items-center gap-3 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                                    isSelected 
                                      ? darkMode ? 'bg-[#C86D51] text-white border-[#C86D51] shadow-md' : 'bg-[#2C2623] text-white border-[#2C2623] shadow-md' 
                                      : darkMode ? 'bg-[#221F1C] hover:bg-[#2A2623] border-[#38332E]' : 'bg-[#FAF7F2] hover:bg-[#F3EFE6] border-[#E6E0D4]'
                                  }`}
                                >
                                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
                                    isSelected ? 'bg-white text-[#C86D51]' : 'bg-[#C86D51] text-white'
                                  }`}>
                                    {String.fromCharCode(65 + idx)}
                                  </span>
                                  <span className="font-bold text-sm sm:text-base truncate">{option.nameEn}</span>
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="space-y-3 sm:space-y-4 py-2 sm:py-4">
                            <input
                              type="text"
                              value={answersMap[currentIndex] || ''}
                              onChange={(e) => handleFillInput(e.target.value)}
                              placeholder="ตอบเป็นภาษาอังกฤษ"
                              className={`w-full border rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 text-sm sm:text-base font-bold focus:outline-none focus:border-[#C86D51] ${
                                darkMode ? 'bg-[#221F1C] border-[#38332E] text-white' : 'bg-[#FAF7F2] border-[#E6E0D4] text-[#2C2623]'
                              }`}
                            />
                          </div>
                        )}
                      </div>

                      {/* NAVIGATION BUTTONS */}
                      <div className={`flex gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t ${darkMode ? 'border-[#2C2723]' : 'border-[#E6E0D4]'}`}>
                        <button
                          disabled={currentIndex === 0}
                          onClick={() => handleJumpToQuestion(currentIndex - 1)}
                          className={`flex-1 py-3 sm:py-3.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1 transition-all ${
                            currentIndex === 0 
                              ? darkMode ? 'bg-[#181615] text-neutral-600 cursor-not-allowed' : 'bg-[#FAF7F2] text-[#A89F96] cursor-not-allowed' 
                              : darkMode ? 'bg-[#292522] text-[#E6E0D4] hover:-translate-y-0.5 cursor-pointer' : 'bg-[#F3EFE6] text-[#2C2623] hover:-translate-y-0.5 cursor-pointer'
                          }`}
                        >
                          <ChevronLeft className="w-4 h-4 shrink-0" />
                          <span>ข้อก่อนหน้า</span>
                        </button>

                        {currentIndex + 1 < quizPool.length ? (
                          <button
                            onClick={() => handleJumpToQuestion(currentIndex + 1)}
                            className="flex-1 py-3 sm:py-3.5 rounded-xl bg-[#C86D51] text-white font-extrabold text-xs flex items-center justify-center gap-1 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-xs"
                          >
                            <span>ข้อถัดไป</span>
                            <ChevronRight className="w-4 h-4 shrink-0" />
                          </button>
                        ) : (
                          <button
                            onClick={checkUnansweredAndFinish}
                            className="flex-1 py-3 sm:py-3.5 rounded-xl bg-[#10B981] text-white font-extrabold text-xs flex items-center justify-center gap-1 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-xs"
                          >
                            <Check className="w-4 h-4 shrink-0" />
                            <span>ส่งตรวจคะแนน</span>
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

        {screen === 'quiz-result' && latestResultRecord && (() => {
          const total = latestResultRecord.total;
          const correct = latestResultRecord.score;
          const unanswered = latestResultRecord.details.filter(d => !d.chosenNameEn || d.chosenNameEn === 'No Answer').length;
          const wrong = total - correct - unanswered;

          const correctPct = total > 0 ? Math.round((correct / total) * 100) : 0;
          const wrongPct = total > 0 ? Math.round((wrong / total) * 100) : 0;
          const unansweredPct = total > 0 ? Math.round((unanswered / total) * 100) : 0;

          const radius = 40;
          const circumference = 2 * Math.PI * radius;
          const correctLength = (correct / total) * circumference;
          const wrongLength = (wrong / total) * circumference;
          const unansweredLength = (unanswered / total) * circumference;

          const wrongOffset = -correctLength;
          const unansweredOffset = wrongOffset - wrongLength;

          return (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className={`border-2 rounded-3xl overflow-hidden shadow-md ${
                darkMode ? 'bg-[#1A1816] border-[#38332E]' : 'bg-white border-[#2C2623]'
              }`}>
                <div className={`px-6 py-4 flex justify-between items-center ${
                  darkMode ? 'bg-[#292522] text-white' : 'bg-[#2C2623] text-white'
                }`}>
                  <div>
                    <h2 className="text-base font-extrabold">สรุปผลการทดสอบ (Score Summary)</h2>
                    <p className="text-[11px] text-[#10B981] font-bold">
                      ✓ บันทึกผลคะแนนลงระบบประวัติเรียบร้อยแล้ว
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[#C86D51] rounded-full text-xs font-bold">
                    ครั้งที่ {latestResultRecord.attemptNumber}
                  </span>
                </div>
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* VIVID CIRCULAR PROGRESS GRAPH */}
                  <div className={`border rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xs ${
                    darkMode ? 'bg-[#221F1C] border-[#38332E]' : 'bg-[#FAF7F2] border-[#E6E0D4]'
                  }`}>
                    <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full -rotate-90 drop-shadow-xs" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="transparent"
                          stroke={darkMode ? '#332D28' : '#E2E8F0'}
                          strokeWidth="11"
                        />
                        {correct > 0 && (
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="transparent"
                            stroke="#10B981"
                            strokeWidth="11"
                            strokeDasharray={`${correctLength} ${circumference}`}
                            strokeDashoffset="0"
                          />
                        )}
                        {wrong > 0 && (
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="transparent"
                            stroke="#EF4444"
                            strokeWidth="11"
                            strokeDasharray={`${wrongLength} ${circumference}`}
                            strokeDashoffset={wrongOffset}
                          />
                        )}
                        {unanswered > 0 && (
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="transparent"
                            stroke="#94A3B8"
                            strokeWidth="11"
                            strokeDasharray={`${unansweredLength} ${circumference}`}
                            strokeDashoffset={unansweredOffset}
                          />
                        )}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className={`text-3xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                          {latestResultRecord.percentage}%
                        </span>
                        <span className="text-[11px] font-black uppercase text-[#94A3B8] tracking-wider mt-0.5">SCORE</span>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 w-full">
                      <div className={`flex justify-between items-center text-xs font-bold border-b pb-2 ${darkMode ? 'border-[#38332E]' : 'border-[#E6E0D4]'}`}>
                        <span className={`flex items-center gap-2 ${darkMode ? 'text-neutral-300' : 'text-[#2C2623]'}`}>
                          <div className={`w-5 h-5 rounded-md ${activeAvatarObj.bg} text-white flex items-center justify-center`}>
                            {renderAvatarIcon(latestResultRecord.avatarId || customAvatar, "w-3 h-3")}
                          </div>
                          <span>ผู้สอบ:</span>
                        </span>
                        <span className={`font-extrabold ${darkMode ? 'text-white' : 'text-[#0F172A]'}`}>{latestResultRecord.playerName}</span>
                      </div>
                      {latestResultRecord.userEmail && (
                        <div className={`flex justify-between items-center text-xs font-bold border-b pb-2 ${darkMode ? 'border-[#38332E]' : 'border-[#E6E0D4]'}`}>
                          <span className={darkMode ? 'text-neutral-300' : 'text-[#2C2623]'}>📧 บัญชี Google:</span>
                          <span className="text-[#10B981] font-bold">{latestResultRecord.userEmail}</span>
                        </div>
                      )}
                      <div className={`flex justify-between items-center text-xs font-bold border-b pb-2 ${darkMode ? 'border-[#38332E]' : 'border-[#E6E0D4]'}`}>
                        <span className={darkMode ? 'text-neutral-300' : 'text-[#2C2623]'}>🦴 หมวดหมู่:</span>
                        <span className="text-[#9E948A]">{latestResultRecord.category}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                        <div className={`border rounded-xl p-2.5 text-center shadow-xs ${
                          darkMode ? 'bg-[#10B981]/15 border-[#10B981]/40' : 'bg-[#ECFDF5] border-[#10B981]/40'
                        }`}>
                          <div className="text-[11px] font-extrabold text-[#10B981]">ทำได้ ({correctPct}%)</div>
                          <div className="text-base font-black text-[#10B981]">{correct}/{total} ข้อ</div>
                        </div>

                        {wrong > 0 && (
                          <div className={`border rounded-xl p-2.5 text-center shadow-xs ${
                            darkMode ? 'bg-[#EF4444]/15 border-[#EF4444]/40' : 'bg-[#FEF2F2] border-[#EF4444]/40'
                          }`}>
                            <div className="text-[11px] font-extrabold text-[#EF4444]">ตอบผิด ({wrongPct}%)</div>
                            <div className="text-base font-black text-[#EF4444]">{wrong}/{total} ข้อ</div>
                          </div>
                        )}

                        {unanswered > 0 && (
                          <div className={`border rounded-xl p-2.5 text-center shadow-xs ${
                            darkMode ? 'bg-[#94A3B8]/15 border-[#94A3B8]/40' : 'bg-[#F8FAFC] border-[#94A3B8]/40'
                          }`}>
                            <div className="text-[11px] font-extrabold text-[#94A3B8]">ไม่ตอบ ({unansweredPct}%)</div>
                            <div className="text-base font-black text-[#94A3B8]">{unanswered}/{total} ข้อ</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* DETAILED QUESTION REVIEW INLINE EXPANDABLE */}
                  <div className="space-y-3 pt-2">
                    <h3 className={`text-sm font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                      ผลการทำข้อสอบรายข้อ (คลิกเพื่อขยายดูรายละเอียด):
                    </h3>
                    <div className="space-y-3">
                      {latestResultRecord.details?.map((item, idx) => {
                        const isExpanded = expandedReviewIndex === idx;
                        return (
                          <div key={idx} className={`border rounded-2xl overflow-hidden transition-all shadow-xs ${
                            darkMode ? 'border-[#38332E] bg-[#1C1A18]' : 'border-[#E6E0D4] bg-white'
                          }`}>
                            <div
                              onClick={() => { SoundFX.click(); setExpandedReviewIndex(isExpanded ? null : idx); }}
                              className={`p-4 cursor-pointer flex items-center justify-between transition-colors ${
                                item.isCorrect 
                                  ? darkMode ? 'bg-[#10B981]/20 hover:bg-[#10B981]/30' : 'bg-[#ECFDF5] hover:bg-[#D1FAE5]' 
                                  : darkMode ? 'bg-[#EF4444]/20 hover:bg-[#EF4444]/30' : 'bg-[#FEF2F2] hover:bg-[#FEE2E2]'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-extrabold text-white ${
                                  item.isCorrect ? 'bg-[#10B981]' : 'bg-[#EF4444]'
                                }`}>
                                  {idx + 1}
                                </span>
                                <div>
                                  <span className={`text-xs font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ข้อที่ {idx + 1}</span>
                                  <div className="text-xs font-bold text-[#9E948A]">ตอบ: {item.chosenNameEn || 'ไม่ได้ตอบ'}</div>
                                </div>
                              </div>
                              <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                                item.isCorrect ? 'bg-[#10B981] text-white' : 'bg-[#EF4444] text-white'
                              }`}>
                                {item.isCorrect ? 'ถูกต้อง' : 'ผิด'}
                              </span>
                            </div>

                            {/* EXPANDED VIEW */}
                            {isExpanded && (
                              <div className={`p-5 border-t space-y-4 ${
                                darkMode ? 'border-[#38332E] bg-[#221F1C]' : 'border-[#E6E0D4] bg-[#FAF7F2]'
                              }`}>
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                  <div className={`lg:col-span-6 border rounded-2xl p-4 flex items-center justify-center min-h-[260px] ${
                                    darkMode ? 'bg-[#181615] border-[#38332E]' : 'bg-white border-[#E6E0D4]'
                                  }`}>
                                    <img
                                      src={item.imageUrl}
                                      alt=""
                                      className="max-h-[240px] object-contain rounded-xl"
                                      onError={(e) => handleSafeImageFallback(e, item.imageUrl)}
                                    />
                                  </div>
                                  <div className={`lg:col-span-6 border rounded-2xl p-5 space-y-3 flex flex-col justify-between ${
                                    darkMode ? 'bg-[#181615] border-[#38332E]' : 'bg-white border-[#E6E0D4]'
                                  }`}>
                                    <h4 className={`text-sm font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                                      {latestResultRecord.examMode === 'fill' ? 'พิมพ์ชื่อภาษาอังกฤษของกระดูกในภาพ:' : 'กระดูกส่วนที่ไฮไลท์สีเหลืองในภาพคือข้อใด?'}
                                    </h4>

                                    {latestResultRecord.examMode === 'fill' ? (
                                      <div className="space-y-3 py-2">
                                        <div className={`p-3 border rounded-xl text-xs ${
                                          darkMode ? 'bg-[#221F1C] border-[#38332E]' : 'bg-[#FAF7F2] border-[#E6E0D4]'
                                        }`}>
                                          <b>คำตอบที่คุณพิมพ์:</b> <span className={item.isCorrect ? 'text-[#10B981] font-bold' : 'text-[#EF4444] font-bold'}>{item.chosenNameEn || 'ไม่ได้ตอบ'}</span>
                                        </div>
                                        <div className={`p-3 border rounded-xl text-xs text-[#10B981] ${
                                          darkMode ? 'bg-[#10B981]/15 border-[#10B981]/40' : 'bg-[#ECFDF5] border-[#10B981]'
                                        }`}>
                                          <b>คำตอบที่ถูกต้อง:</b> <b>{item.boneNameEn}</b>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="space-y-2">
                                        {item.options?.map((opt, oIdx) => {
                                          const isChosenUser = opt.nameEn === item.chosenNameEn;
                                          const isTheCorrectOne = opt.nameEn === item.boneNameEn;

                                          let btnStyle = darkMode ? 'bg-[#221F1C] border-[#38332E] text-neutral-300' : 'bg-[#FAF7F2] border-[#E6E0D4] text-[#2C2623]';
                                          if (isTheCorrectOne) {
                                            btnStyle = 'bg-[#10B981] text-white border-[#10B981] font-extrabold';
                                          } else if (isChosenUser && !item.isCorrect) {
                                            btnStyle = 'bg-[#EF4444] text-white border-[#EF4444] font-extrabold';
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

                  <div className="flex gap-3 pt-2">
                    <button onClick={() => { SoundFX.click(); setScreen('home'); }} className="flex-1 py-3.5 bg-[#C86D51] text-white rounded-xl text-xs font-extrabold hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-xs">
                      กลับหน้าหลัก
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* HISTORY SCREEN WITH DEEP QUESTION INSPECTION */}
        {screen === 'history' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className={`text-xl font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ประวัติคะแนนที่บันทึกไว้</h2>
                <p className="text-xs text-[#9E948A]">คลิกรายการใดก็ได้เพื่อดูรูปภาพและรายละเอียดเฉลยทุกข้อ</p>
              </div>
              <button
                onClick={() => { SoundFX.click(); setScreen('home'); }}
                className="text-xs font-bold text-[#C86D51] hover:underline cursor-pointer"
              >
                ← กลับหน้าหลัก
              </button>
            </div>

            {scoreHistory.length === 0 ? (
              <div className={`border rounded-3xl p-8 text-center space-y-3 ${
                darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
              }`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto ${
                  darkMode ? 'bg-[#292522] text-[#9E948A]' : 'bg-[#F3EFE6] text-[#786F68]'
                }`}>
                  <History className="w-6 h-6" />
                </div>
                <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>ยังไม่มีประวัติคะแนนในระบบ</div>
                <p className="text-xs text-[#9E948A]">เมื่อทำข้อสอบจบ ระบบจะบันทึกผลและรายละเอียดทั้งหมดมาแสดงที่นี่โดยอัตโนมัติ</p>
              </div>
            ) : (
              <div className="space-y-3">
                {scoreHistory.map((item, idx) => {
                  const itemAvatar = AVATAR_OPTIONS.find(a => a.id === item.avatarId) || AVATAR_OPTIONS[0];
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        SoundFX.click();
                        setSelectedHistoryDetail(item);
                        setHistoryDetailExpandedIdx(null);
                      }}
                      className={`border rounded-2xl p-4 flex items-center justify-between shadow-xs hover:border-[#C86D51] hover:-translate-y-0.5 transition-all cursor-pointer group ${
                        darkMode ? 'bg-[#1A1816] border-[#2C2723]' : 'bg-white border-[#E6E0D4]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-11 h-11 rounded-2xl ${itemAvatar.bg} text-white flex items-center justify-center shadow-xs shrink-0`}>
                          {renderAvatarIcon(item.avatarId, "w-5 h-5")}
                        </div>
                        <div>
                          <div className={`font-extrabold text-sm flex items-center gap-2 ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                            <span>{item.playerName}</span>
                            {item.userEmail && (
                              <span className="text-[10px] bg-[#ECFDF5] text-[#059669] px-2 py-0.5 rounded-md font-bold">
                                {item.userEmail}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-[#9E948A] mt-0.5">
                            หมวด: {item.category} • ครั้งที่ {item.attemptNumber} • {item.timestamp}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-base font-black text-[#10B981]">{item.score} / {item.total}</div>
                          <div className="text-[11px] font-bold text-[#9E948A]">({item.percentage}%)</div>
                        </div>
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                          darkMode ? 'bg-[#292522] group-hover:bg-[#C86D51] group-hover:text-white text-[#9E948A]' : 'bg-[#FAF7F2] group-hover:bg-[#C86D51] group-hover:text-white text-[#786F68]'
                        }`}>
                          <Eye className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* FULL DETAILED HISTORY MODAL */}
            {selectedHistoryDetail && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className={`rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-2xl border-2 ${
                  darkMode ? 'bg-[#1A1816] border-[#38332E]' : 'bg-white border-[#2C2623]'
                }`}>
                  <div className={`p-5 flex justify-between items-center shrink-0 ${
                    darkMode ? 'bg-[#292522] text-white' : 'bg-[#2C2623] text-white'
                  }`}>
                    <div>
                      <h3 className="font-extrabold text-base flex items-center gap-2">
                        <span>ผลสอบของ: {selectedHistoryDetail.playerName}</span>
                      </h3>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        หมวด: {selectedHistoryDetail.category} • สอบเมื่อ: {selectedHistoryDetail.timestamp}
                        {selectedHistoryDetail.userEmail && ` • (${selectedHistoryDetail.userEmail})`}
                      </p>
                    </div>
                    <button
                      onClick={() => { SoundFX.click(); setSelectedHistoryDetail(null); }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  <div className="p-6 overflow-y-auto space-y-4">
                    <div className={`border rounded-2xl p-4 flex justify-between items-center ${
                      darkMode ? 'bg-[#221F1C] border-[#38332E]' : 'bg-[#FAF7F2] border-[#E6E0D4]'
                    }`}>
                      <div>
                        <div className="text-xs text-[#9E948A] font-bold">คะแนนที่ทำได้</div>
                        <div className="text-2xl font-black text-[#10B981]">
                          {selectedHistoryDetail.score} / {selectedHistoryDetail.total} ({selectedHistoryDetail.percentage}%)
                        </div>
                      </div>
                      <div className="text-right text-xs font-bold text-[#9E948A]">
                        <div>รูปแบบ: {selectedHistoryDetail.examMode}</div>
                        <div>เวลาที่ใช้: {selectedHistoryDetail.durationSec} วินาที</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <h4 className={`text-xs font-extrabold ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>
                        ข้อสอบทั้งหมด ({selectedHistoryDetail.details?.length || 0} ข้อ) - คลิกข้อเพื่อดูรูปภาพและช้อยส์:
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {selectedHistoryDetail.details?.map((q, qIdx) => {
                        const isExpanded = historyDetailExpandedIdx === qIdx;
                        return (
                          <div
                            key={qIdx}
                            className={`border rounded-2xl overflow-hidden shadow-xs transition-all ${
                              darkMode ? 'border-[#38332E] bg-[#1C1A18]' : 'border-[#E6E0D4] bg-white'
                            }`}
                          >
                            <div
                              onClick={() => { SoundFX.click(); setHistoryDetailExpandedIdx(isExpanded ? null : qIdx); }}
                              className={`p-3.5 flex items-center justify-between cursor-pointer transition-colors ${
                                q.isCorrect 
                                  ? darkMode ? 'bg-[#10B981]/20 hover:bg-[#10B981]/30' : 'bg-[#ECFDF5] hover:bg-[#D1FAE5]' 
                                  : darkMode ? 'bg-[#EF4444]/20 hover:bg-[#EF4444]/30' : 'bg-[#FEF2F2] hover:bg-[#FEE2E2]'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black text-white ${
                                  q.isCorrect ? 'bg-[#10B981]' : 'bg-[#EF4444]'
                                }`}>
                                  {qIdx + 1}
                                </span>
                                <div>
                                  <span className={`font-extrabold text-sm ${darkMode ? 'text-white' : 'text-[#2C2623]'}`}>{q.boneNameEn}</span>
                                  <div className="text-xs text-[#9E948A]">
                                    คำตอบที่เลือก: <b className={q.isCorrect ? 'text-[#10B981]' : 'text-[#EF4444]'}>{q.chosenNameEn || 'ไม่ได้ตอบ'}</b>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                                  q.isCorrect ? 'bg-[#10B981] text-white' : 'bg-[#EF4444] text-white'
                                }`}>
                                  {q.isCorrect ? 'ถูกต้อง' : 'ผิด'}
                                </span>
                                <ChevronRight className={`w-4 h-4 text-[#9E948A] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                              </div>
                            </div>

                            {isExpanded && (
                              <div className={`p-4 border-t space-y-4 ${
                                darkMode ? 'border-[#38332E] bg-[#221F1C]' : 'border-[#E6E0D4] bg-[#FAF7F2]'
                              }`}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className={`border rounded-xl p-3 flex items-center justify-center min-h-[180px] ${
                                    darkMode ? 'bg-[#181615] border-[#38332E]' : 'bg-white border-[#E6E0D4]'
                                  }`}>
                                    {q.imageUrl ? (
                                      <img
                                        src={q.imageUrl}
                                        alt=""
                                        className="max-h-[170px] object-contain rounded-lg"
                                        onError={(e) => handleSafeImageFallback(e, q.imageUrl)}
                                      />
                                    ) : (
                                      <span className="text-xs text-[#9E948A]">ไม่มีรูปภาพ</span>
                                    )}
                                  </div>
                                  <div className={`border rounded-xl p-4 flex flex-col justify-between space-y-2 ${
                                    darkMode ? 'bg-[#181615] border-[#38332E]' : 'bg-white border-[#E6E0D4]'
                                  }`}>
                                    <div className="space-y-2">
                                      <div className="text-xs text-[#9E948A] font-bold">ชื่อกระดูกที่ถูกต้อง:</div>
                                      <div className={`text-base font-black text-[#10B981] px-3 py-1.5 rounded-lg border ${
                                        darkMode ? 'bg-[#10B981]/15 border-[#10B981]/40' : 'bg-[#ECFDF5] border-[#10B981]/30'
                                      }`}>
                                        {q.boneNameEn}
                                      </div>

                                      <div className="text-xs text-[#9E948A] font-bold pt-1">คำตอบของผู้สอบ:</div>
                                      <div className={`text-sm font-extrabold px-3 py-1.5 rounded-lg border ${
                                        q.isCorrect 
                                          ? darkMode ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/40' : 'bg-[#ECFDF5] text-[#059669] border-[#10B981]/30'
                                          : darkMode ? 'bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/40' : 'bg-[#FEF2F2] text-[#DC2626] border-[#EF4444]/30'
                                      }`}>
                                        {q.chosenNameEn || 'ไม่ได้ตอบ'}
                                      </div>
                                    </div>
                                    <div className="text-[11px] text-[#9E948A]">หมายเลขข้ออ้างอิง: #{q.num || qIdx + 1}</div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className={`p-4 border-t shrink-0 text-right ${
                    darkMode ? 'bg-[#221F1C] border-[#38332E]' : 'bg-[#FAF7F2] border-[#E6E0D4]'
                  }`}>
                    <button
                      onClick={() => { SoundFX.click(); setSelectedHistoryDetail(null); }}
                      className="px-6 py-2.5 bg-[#C86D51] text-white rounded-xl text-xs font-extrabold hover:bg-[#b05b41] transition-all cursor-pointer shadow-xs"
                    >
                      ปิดหน้าต่าง
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}