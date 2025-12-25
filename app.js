// Data
const pets = [
  { id: 1, name: "Buddy", type: "Dog", breed: "Golden Retriever", age: "3 years", gender: "Male", size: "Large", location: "Mumbai, Maharashtra", description: "Friendly and energetic golden retriever who loves to play fetch", personality: ["Friendly", "Energetic", "Loyal"], goodWith: ["Kids", "Dogs"], vaccinated: true, neutered: true, adoptionFee: "₹5,000", shelterId: 1, emoji: "🦮" },
  { id: 2, name: "Luna", type: "Cat", breed: "Persian", age: "2 years", gender: "Female", size: "Small", location: "Delhi, NCR", description: "Calm and affectionate Persian cat, perfect lap companion", personality: ["Calm", "Affectionate", "Gentle"], goodWith: ["Kids", "Cats"], vaccinated: true, neutered: true, adoptionFee: "₹4,000", shelterId: 2, emoji: "🐱" },
  { id: 3, name: "Max", type: "Dog", breed: "Labrador", age: "4 years", gender: "Male", size: "Large", location: "Bangalore, Karnataka", description: "Playful lab who enjoys long walks and swimming", personality: ["Playful", "Active", "Social"], goodWith: ["Kids", "Dogs", "Cats"], vaccinated: true, neutered: true, adoptionFee: "₹6,000", shelterId: 3, emoji: "🐕" },
  { id: 4, name: "Mittens", type: "Cat", breed: "Tabby", age: "1 year", gender: "Female", size: "Small", location: "Pune, Maharashtra", description: "Young playful tabby with beautiful markings", personality: ["Playful", "Curious", "Independent"], goodWith: ["Cats"], vaccinated: true, neutered: true, adoptionFee: "₹2,500", shelterId: 1, emoji: "🐈" },
  { id: 5, name: "Rocky", type: "Dog", breed: "German Shepherd", age: "5 years", gender: "Male", size: "Large", location: "Hyderabad, Telangana", description: "Intelligent and protective, great guard dog", personality: ["Intelligent", "Protective", "Loyal"], goodWith: ["Adults"], vaccinated: true, neutered: true, adoptionFee: "₹7,000", shelterId: 4, emoji: "🐕‍🦺" },
  { id: 6, name: "Whiskers", type: "Cat", breed: "Siamese", age: "3 years", gender: "Male", size: "Small", location: "Chennai, Tamil Nadu", description: "Vocal and social Siamese, loves attention", personality: ["Vocal", "Social", "Intelligent"], goodWith: ["Kids", "Adults"], vaccinated: true, neutered: true, adoptionFee: "₹5,500", shelterId: 5, emoji: "🐱" },
  { id: 7, name: "Daisy", type: "Dog", breed: "Beagle", age: "2 years", gender: "Female", size: "Medium", location: "Kolkata, West Bengal", description: "Sweet beagle with a nose for adventure", personality: ["Curious", "Friendly", "Energetic"], goodWith: ["Kids", "Dogs"], vaccinated: true, neutered: true, adoptionFee: "₹5,500", shelterId: 2, emoji: "🐶" },
  { id: 8, name: "Shadow", type: "Cat", breed: "Black Cat", age: "4 years", gender: "Male", size: "Medium", location: "Ahmedabad, Gujarat", description: "Mysterious and gentle black cat seeking loving home", personality: ["Gentle", "Calm", "Affectionate"], goodWith: ["Adults", "Cats"], vaccinated: true, neutered: true, adoptionFee: "₹3,000", shelterId: 3, emoji: "🐈‍⬛" }
];

const shelters = [
  { id: 1, name: "Paws & Hearts Animal Shelter", location: "Mumbai, Maharashtra", animalsInCare: 45, description: "Dedicated to rescuing and rehoming abandoned pets", needs: ["Dog Food - 50kg", "Cat Food - 30kg", "Medical Supplies", "Bedding"], monthlyGoal: 150000, currentFunding: 95000 },
  { id: 2, name: "Happy Tails Rescue", location: "Delhi, NCR", animalsInCare: 38, description: "No-kill shelter providing medical care and love", needs: ["Veterinary Care", "Food Supplies", "Building Repairs"], monthlyGoal: 120000, currentFunding: 78000 },
  { id: 3, name: "Second Chance Animal Welfare", location: "Bangalore, Karnataka", animalsInCare: 52, description: "Giving every animal a second chance at happiness", needs: ["Medications", "Food", "Toys and Enrichment", "Staff Support"], monthlyGoal: 180000, currentFunding: 120000 },
  { id: 4, name: "Forever Home Foundation", location: "Hyderabad, Telangana", animalsInCare: 31, description: "Finding forever homes for special needs animals", needs: ["Wheelchairs for Disabled Pets", "Special Diet Food", "Medical Equipment"], monthlyGoal: 200000, currentFunding: 145000 },
  { id: 5, name: "Compassion Animal Shelter", location: "Chennai, Tamil Nadu", animalsInCare: 42, description: "Community-driven shelter focused on education and adoption", needs: ["Food Supplies", "Vaccination Drives", "Shelter Expansion"], monthlyGoal: 140000, currentFunding: 89000 }
];

const lostFoundPosts = [
  { id: 1, type: "lost", petType: "Dog", breed: "Golden Retriever", name: "Charlie", color: "Golden", size: "Large", location: "Bandra West, Mumbai", date: "2025-11-03", description: "Lost near Carter Road, wearing blue collar", contact: "9876543210", daysAgo: 3, emoji: "🦮" },
  { id: 2, type: "found", petType: "Cat", breed: "Mixed", color: "Orange and White", size: "Small", location: "Indiranagar, Bangalore", date: "2025-11-04", description: "Found near park, very friendly, no collar", contact: "9876543211", daysAgo: 2, emoji: "🐱" },
  { id: 3, type: "lost", petType: "Dog", breed: "Labrador", name: "Bruno", color: "Black", size: "Large", location: "Koramangala, Bangalore", date: "2025-11-01", description: "Black lab, answers to Bruno, has microchip", contact: "9876543212", daysAgo: 5, emoji: "🐕" },
  { id: 4, type: "found", petType: "Cat", breed: "Persian", color: "White", size: "Small", location: "Connaught Place, Delhi", date: "2025-11-05", description: "White Persian cat found, well-groomed", contact: "9876543213", daysAgo: 1, emoji: "🐱" },
  { id: 5, type: "lost", petType: "Dog", breed: "Pomeranian", name: "Fluffy", color: "Brown", size: "Small", location: "Jubilee Hills, Hyderabad", date: "2025-10-30", description: "Small brown Pomeranian, very shy", contact: "9876543214", daysAgo: 7, emoji: "🐶" }
];

// State
let currentSection = 'home';
let filteredPets = [...pets];
let selectedShelter = null;
let selectedAmount = 0;
let favorites = [];

// Navigation
function navigateToSection(section) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('home-section').style.display = section === 'home' ? 'block' : 'none';
  document.querySelector('.quick-access').style.display = section === 'home' ? 'block' : 'none';
  
  // Show selected section
  if (section !== 'home') {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.classList.add('active');
    }
  }
  
  // Update navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === section) {
      link.classList.add('active');
    }
  });
  
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  currentSection = section;
}
window.navigateToSection = navigateToSection;

// Initialize navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    navigateToSection(section);
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Counter animation
function animateCounter() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;
  
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    let count = 0;
    const increment = target / speed;
    
    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.textContent = Math.ceil(count).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    
    updateCount();
  });
}

// Animate counters on page load
setTimeout(animateCounter, 500);

// Browse Pets Section
function renderPets() {
  const grid = document.getElementById('petsGrid');
  grid.innerHTML = '';
  
  filteredPets.forEach(pet => {
    const isFavorited = favorites.includes(pet.id);
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.innerHTML = `
      <div class="pet-image">
        <span class="pet-emoji">${pet.emoji}</span>
      </div>
      <div class="pet-info">
        <div class="pet-name">${pet.name}</div>
        <div class="pet-breed">${pet.breed}</div>
        <div class="pet-details">
          <span>${pet.age}</span> • <span>${pet.gender}</span> • <span>${pet.size}</span>
        </div>
        <div class="pet-location">📍 ${pet.location}</div>
        <div class="pet-description">${pet.description}</div>
        <div class="pet-actions">
          <button class="btn-small btn-learn" onclick="openPetDetails(${pet.id})">Learn More</button>
          <button class="btn-small btn-favorite ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite(${pet.id})">
            ${isFavorited ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function applyFilters() {
  const selectedTypes = Array.from(document.querySelectorAll('.filter-type:checked')).map(cb => cb.value);
  const selectedSizes = Array.from(document.querySelectorAll('.filter-size:checked')).map(cb => cb.value);
  const selectedGenders = Array.from(document.querySelectorAll('.filter-gender:checked')).map(cb => cb.value);
  
  filteredPets = pets.filter(pet => {
    return selectedTypes.includes(pet.type) &&
           selectedSizes.includes(pet.size) &&
           selectedGenders.includes(pet.gender);
  });
  
  renderPets();
}
window.applyFilters = applyFilters

function clearFilters() {
  document.querySelectorAll('.filter-type, .filter-size, .filter-gender').forEach(cb => {
    cb.checked = true;
  });
  filteredPets = [...pets];
  renderPets();
}

function toggleFavorite(petId) {
  const index = favorites.indexOf(petId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(petId);
  }
  renderPets();
}
window.toggleFavorite = toggleFavorite
window.clearFilters = clearFilters

function openPetDetails(petId) {
  const pet = pets.find(p => p.id === petId);
  const shelter = shelters.find(s => s.id === pet.shelterId);
  
  const content = `
    <div class="modal-pet-image">
      <span class="pet-emoji">${pet.emoji}</span>
    </div>
    <div class="modal-body">
      <h2>${pet.name}</h2>
      <p class="modal-subtitle">${pet.breed} • ${pet.age}</p>
      
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Gender</div>
          <div class="detail-value">${pet.gender}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Size</div>
          <div class="detail-value">${pet.size}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Vaccinated</div>
          <div class="detail-value">${pet.vaccinated ? '✓ Yes' : '✗ No'}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Neutered</div>
          <div class="detail-value">${pet.neutered ? '✓ Yes' : '✗ No'}</div>
        </div>
      </div>
      
      <h3 class="section-heading">Personality</h3>
      <div class="personality-tags">
        ${pet.personality.map(trait => `<span class="tag">${trait}</span>`).join('')}
      </div>
      
      <h3 class="section-heading">Good With</h3>
      <div class="good-with-list">
        ${pet.goodWith.map(item => `<span class="check-item">✓ ${item}</span>`).join('')}
      </div>
      
      <h3 class="section-heading">About ${pet.name}</h3>
      <p>${pet.description}</p>
      
      <h3 class="section-heading">Location</h3>
      <p>📍 ${pet.location}</p>
      <p><strong>Shelter:</strong> ${shelter.name}</p>
      
      <div class="adoption-fee-box">
        <div class="fee-label">Adoption Fee</div>
        <div class="fee-amount">${pet.adoptionFee}</div>
      </div>
      
      <button class="btn-adopt" onclick="openAdoptionForm(${pet.id})">Apply to Adopt ${pet.name}</button>
    </div>
  `;
  
  document.getElementById('petModalContent').innerHTML = content;
  openModal('petModal');
}
window.openPetDetails = openPetDetails

function openAdoptionForm(petId) {
  closeModal('petModal');
  openModal('adoptionModal');

  const adoptionForm = document.getElementById('adoptionForm');
  adoptionForm.onsubmit = (e) => {
    e.preventDefault();
    adoptPet(petId)
      .then(() => {
        closeModal('adoptionModal');
      });
  };
}
window.openAdoptionForm = openAdoptionForm

// Modal functions
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.openModal = openModal

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
  document.body.style.overflow = 'auto';
}
window.closeModal = closeModal

// Close modal on background click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal.id);
    }
  });
});

// Adoption Form
document.getElementById('adoptionForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('adoptionSuccess').classList.add('show');
  e.target.style.display = 'none';
  setTimeout(() => {
    closeModal('adoptionModal');
    document.getElementById('adoptionSuccess').classList.remove('show');
    e.target.style.display = 'block';
    e.target.reset();
  }, 3000);
});

// Lost & Found Section
function togglePostType(type) {
  document.getElementById('postType').value = type;
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  const nameGroup = document.getElementById('petNameGroup');
  if (type === 'lost') {
    nameGroup.style.display = 'block';
  } else {
    nameGroup.style.display = 'none';
  }
}

function switchTab(tab) {
  // Remove 'active' from all tabs and tab contents
  document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach((c) => c.classList.remove('active'));

  // Activate the clicked tab and corresponding content
  document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active');
  document.getElementById(`${tab}-tab`).classList.add('active');
}
window.switchTab = switchTab;

function renderLostFoundPosts() {
  const lostGrid = document.getElementById('lostPostsGrid');
  const foundGrid = document.getElementById('foundPostsGrid');
  
  lostGrid.innerHTML = '';
  foundGrid.innerHTML = '';
  
  lostFoundPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <div class="post-banner ${post.type}">${post.type.toUpperCase()}</div>
      <div class="post-image">
        <span class="pet-emoji">${post.emoji}</span>
      </div>
      <div class="post-info">
        <div class="post-type">${post.name ? post.name + ' - ' : ''}${post.breed}</div>
        <div class="post-location">📍 ${post.location}</div>
        <div class="post-date">${post.daysAgo} days ago</div>
        <div class="post-description">${post.description}</div>
        <button class="btn-contact" onclick="showContact('${post.contact}')">Contact: ${post.contact}</button>
      </div>
    `;
    
    if (post.type === 'lost') {
      lostGrid.appendChild(card);
    } else {
      foundGrid.appendChild(card);
    }
  });
}

function showContact(contact) {
  alert(`Contact: ${contact}\n\nYou can reach out via phone or messaging apps.`);
}

// Support Shelters Section
function renderShelters() {
  const grid = document.getElementById('sheltersGrid');
  grid.innerHTML = '';
  
  shelters.forEach(shelter => {
    const progressPercent = Math.round((shelter.currentFunding / shelter.monthlyGoal) * 100);
    const card = document.createElement('div');
    card.className = 'shelter-card';
    card.innerHTML = `
      <div class="shelter-header">
        <div class="shelter-icon">🏠</div>
        <div class="shelter-name">${shelter.name}</div>
        <div class="shelter-location">📍 ${shelter.location}</div>
      </div>
      <div class="shelter-body">
        <div class="shelter-stat">
          <span class="stat-label-shelter">Animals in Care</span>
          <span class="stat-value-shelter">${shelter.animalsInCare}</span>
        </div>
        <p style="font-size: 14px; color: #666; margin-bottom: 12px;">${shelter.description}</p>
        
        <div class="needs-list">
          <div class="needs-title">Current Needs:</div>
          ${shelter.needs.slice(0, 3).map(need => `<div class="need-item">${need}</div>`).join('')}
        </div>
        
        <div class="progress-bar">
          <div class="progress-label">
            <span>Monthly Goal</span>
            <span>${progressPercent}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${progressPercent}%"></div>
          </div>
          <div class="progress-label" style="margin-top: 4px; font-size: 12px;">
            <span>₹${shelter.currentFunding.toLocaleString()}</span>
            <span>₹${shelter.monthlyGoal.toLocaleString()}</span>
          </div>
        </div>
        
        <button class="btn-support" onclick="openDonationModal(${shelter.id})">Support This Shelter</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openDonationModal(shelterId) {
  selectedShelter = shelters.find(s => s.id === shelterId);
  openModal('donationModal');
}
window.openDonationModal = openDonationModal

function selectAmount(amount) {
  selectedAmount = amount;
  document.querySelectorAll('.amount-option').forEach(option => {
    option.classList.remove('selected');
  });
  event.target.classList.add('selected');
  document.getElementById('customAmount').value = '';
}
window.selectAmount = selectAmount

document.getElementById('customAmount').addEventListener('input', (e) => {
  selectedAmount = parseInt(e.target.value) || 0;
  document.querySelectorAll('.amount-option').forEach(option => {
    option.classList.remove('selected');
  });
});

// Donation Form
document.getElementById('donationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (selectedAmount === 0) {
    alert('Please select or enter a donation amount.');
    return;
  }

  // ✅ Update in Firebase
  if (selectedShelter) {
    saveDonation(selectedShelter.id, selectedAmount)
      .then(() => {
        document.getElementById('donationSuccess').classList.add('show');
        e.target.style.display = 'none';
        setTimeout(() => {
          closeModal('donationModal');
          document.getElementById('donationSuccess').classList.remove('show');
          e.target.style.display = 'block';
          e.target.reset();
          selectedAmount = 0;
          document.querySelectorAll('.amount-option').forEach(option => {
            option.classList.remove('selected');
          });
        }, 3000);
      })
      .catch((err) => {
        console.error("Donation error:", err);
        alert("Error processing donation, please try again.");
      });
  }
});


// Newsletter Form
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for subscribing! You\'ll receive updates about our furry friends.');
  e.target.reset();
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

// Observe sections
document.querySelectorAll('.quick-card, .pet-card, .shelter-card').forEach(el => {
  el.classList.add('fade-in-section');
  observer.observe(el);
});

// Initialize
// renderPets();
// renderLostFoundPosts();
// renderShelters();

// Sticky navbar
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
  
  lastScrollTop = scrollTop;
});

console.log('Furever Pet Adoption Platform loaded successfully! 🐾');

// =========================
// 🔥 Firebase Integration
// =========================

// --- Test connection ---
const testRef = window.ref(window.db, "testConnection");
window.set(testRef, {
  message: "Firebase connected successfully!",
  timestamp: Date.now(),
});

// // ⚠️ Run once, then comment out after data is in Firebase
// function uploadInitialData() {
//   const petsRef = window.ref(window.db, "pets");
//   const sheltersRef = window.ref(window.db, "shelters");

//   // Upload pets
//   window.set(petsRef, pets)
//     .then(() => console.log("✅ Pets uploaded successfully"))
//     .catch(err => console.error("Error uploading pets:", err));

//   // Upload shelters
//   window.set(sheltersRef, shelters)
//     .then(() => console.log("✅ Shelters uploaded successfully"))
//     .catch(err => console.error("Error uploading shelters:", err));
// }
// uploadInitialData();

// =========================
// Save Post Function
// =========================
function savePost(type, postData) {
  const postsRef = window.ref(window.db, `posts/${type}`);
  const newPostRef = window.push(postsRef);
  return window.set(newPostRef, postData);
}

// =========================
// Real-time Listener
// =========================
function listenToPosts(type) {
  const postsRef = window.ref(window.db, `posts/${type}`);
  const container = document.getElementById(`${type}PostsGrid`);

  window.onValue(postsRef, (snapshot) => {
    container.innerHTML = "";
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        const post = child.val();
        const card = document.createElement("div");
        card.classList.add("post-card");
        card.innerHTML = `
          <div class="post-banner ${type}">${type.toUpperCase()}</div>
          <div class="post-info">
            <div class="post-type">${post.animalType || "Unknown"}</div>
            <div class="post-location">📍 ${post.location || "Not specified"}</div>
            <div class="post-date">${post.date || ""}</div>
            <div class="post-description">${post.details || "No details provided."}</div>
            <div class="post-phone">📞 ${post.phone || "N/A"}</div>
          </div>
        `;
        container.appendChild(card);
      });
    } else {
      container.innerHTML = `<p>No ${type} posts yet.</p>`;
    }
  });
}

// =========================
// 🏠 Real-time Shelter Donations
// =========================

// =========================
// 🏠 Enhanced: Real-time Shelter Donations
// =========================
function saveDonation(shelterId, amount) {
  const shelterIndex = shelters.findIndex(s => s.id === shelterId);
  if (shelterIndex === -1) {
    return Promise.reject("Shelter not found in local data");
  }

  const shelterRef = window.ref(window.db, `shelters/${shelterIndex}`);

  return new Promise((resolve, reject) => {
    window.onValue(
      shelterRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const newFunding = (data.currentFunding || 0) + amount;

          // ✅ Check if goal achieved
          if (newFunding >= data.monthlyGoal) {
            // Delete shelter from Firebase
            window.remove(shelterRef)
              .then(() => {
                console.log(`🎯 Goal achieved! ${data.name} removed from Firebase.`);
                alert(`${data.name} has achieved its goal and is now removed from the list!`);
                resolve();
              })
              .catch((err) => {
                console.error("Error removing shelter:", err);
                reject(err);
              });
          } else {
            // Normal funding update
            const updated = { ...data, currentFunding: newFunding };
            window
              .set(shelterRef, updated)
              .then(() => {
                console.log(`✅ Donation of ₹${amount} added to ${data.name}`);
                resolve();
              })
              .catch(reject);
          }
        } else {
          reject("Shelter not found in Firebase");
        }
      },
      { onlyOnce: true }
    );
  });
}

function listenToShelters() {
  const sheltersRef = window.ref(window.db, "shelters");
  window.onValue(sheltersRef, (snapshot) => {
    if (snapshot.exists()) {
      const sheltersData = snapshot.val();

      // Convert to array and sync
      shelters.length = 0;
      for (const key in sheltersData) {
        shelters.push(sheltersData[key]);
      }

      // ✅ Remove from local if deleted remotely
      renderShelters();
    } else {
      shelters.length = 0; // clear local array
      renderShelters(); // will render "no shelters" view
      console.warn("No shelters data found.");
    }
  });
}

listenToShelters();

// =========================
// 🐶 Real-time Pet Adoption
// =========================

// Mark a pet as adopted
function adoptPet(petId) {
  const petIndex = pets.findIndex(p => p.id === petId);
  const petRef = window.ref(window.db, `pets/${petIndex}/adopted`);
  return window.set(petRef, true)
    .then(() => {
      alert("Pet adopted successfully!");
    })
    .catch((err) => {
      console.error("Error marking adoption:", err);
    });
}

// Listen to real-time pet updates
function listenToPets() {
  const petsRef = window.ref(window.db, "pets");
  window.onValue(petsRef, (snapshot) => {
    if (snapshot.exists()) {
      const petsData = snapshot.val();
      const allPets = Object.values(petsData);
      filteredPets = allPets.filter(pet => !pet.adopted);
      pets.length = 0;
      pets.push(...allPets); // keep memory in sync

      renderPets();
    } else {
      console.warn("No pets data found.");
    }
  });
}


// Start the listeners for both feeds
listenToPets();
listenToShelters();
listenToPosts("lost");
listenToPosts("found");


// =========================
// Lost & Found Form Handling (Stable Version)
// =========================
const lostFoundForm = document.getElementById("lostFoundForm");
if (lostFoundForm) {
  lostFoundForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // ✅ Collect all fields in one synchronous step
    const formData = new FormData(lostFoundForm);
    const post = Object.fromEntries(formData.entries());
    post.createdAt = new Date().toISOString();

    console.table(post); // 🔍 Debug before saving

    // ✅ Save to Firebase
    savePost(post.postType || "lost", post)
      .then(() => {
        alert(`Your ${post.postType} post has been added successfully!`);
        lostFoundForm.reset();
      })
      .catch((err) => {
        console.error("Error adding post:", err);
      });
  });
}

// =========================
// 🏠 Shelter Registration Modal Form
// =========================
const shelterForm = document.getElementById("shelterRegistrationForm");
if (shelterForm) {
  shelterForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const shelterData = {
      name: document.getElementById("shelterName").value.trim(),
      location: document.getElementById("shelterLocation").value.trim(),
      description: document.getElementById("shelterDescription").value.trim(),
      needs: document.getElementById("shelterNeeds").value
        ? document.getElementById("shelterNeeds").value.split(",").map(n => n.trim())
        : [],
      contact: document.getElementById("shelterContact").value.trim(),
      submittedAt: new Date().toISOString(),
      status: "pending",
    };

    try {
      const pendingRef = window.ref(window.db, "pendingShelters");
      const newShelterRef = window.push(pendingRef);
      await window.set(newShelterRef, shelterData);

      // Reset form and show success message
      shelterForm.reset();
      document.getElementById("shelterFormMessage").style.display = "block";

      setTimeout(() => {
        document.getElementById("shelterFormMessage").style.display = "none";
        closeModal("registerShelterModal");
      }, 3000);
    } catch (err) {
      console.error("Error submitting shelter:", err);
      alert("⚠️ Error submitting shelter. Please try again later.");
    }
  });
}

// ✅ Ensure togglePostType is available globally
window.togglePostType = togglePostType;
// Modal logic for Quick Links
document.querySelectorAll('.footer-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const action = this.getAttribute('data-action');
    if(action === 'adoption-process') openModal('adoptionProcessModal');
    else if(action === 'faqs')          openModal('faqsModal');
    else if(action === 'volunteer')     openModal('volunteerModal');
    else if(action === 'contact-us')    openModal('contactUsModal');
    else if(action === 'success-stories') openModal('successStoriesModal');
  });
});

// Handle volunteer form
document.getElementById('volunteerForm').onsubmit = function(e) {
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('volunteerSuccess').style.display = 'block';
  setTimeout(() => {
    document.getElementById('volunteerSuccess').style.display = 'none';
    this.reset();
    this.style.display = 'block';
    closeModal('volunteerModal');
  }, 2000);
}

// Handle contact form
document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('contactSuccess').style.display = 'block';
  setTimeout(() => {
    document.getElementById('contactSuccess').style.display = 'none';
    this.reset();
    this.style.display = 'block';
    closeModal('contactUsModal');
  }, 2000);
}

// Carousel logic for Success Stories
let curSlide=0;
const slides=document.querySelectorAll('#storiesCarousel .carousel-slide');
function showSlide(idx){
  slides.forEach((s,i)=>s.classList.toggle('active',i===idx));
}
window.carouselPrev=function(){
  curSlide=(curSlide-1+slides.length)%slides.length; showSlide(curSlide);
};
window.carouselNext=function(){
  curSlide=(curSlide+1)%slides.length; showSlide(curSlide);
};
